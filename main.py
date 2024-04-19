from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
# FROM PATT. MALI ATA YUNG SA ROLES KASI AYAW MAGRUN AND HINDI AKO MAKA INSTALL NG 'pip install Flask-User, nakita ko to sa document'==========
# from flask_user import roles_required  
from flask import jsonify 
# ==========

import os
# from flask_wtf import FlaskForm
# from wtforms import StringField, PasswordField, SelectField
# from wtforms.validators import DataRequired, Length, EqualTo

app = Flask(__name__)

app.secret_key = 'aswecvbuiASgh erer3543'

# configure the path to the static and templates folders
static_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), 'thcc-webapp', 'static'))
template_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), 'thcc-webapp', 'templates'))

app.static_folder = static_folder
app.template_folder = template_folder

# mysql connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root''@localhost/web'
#kinopya ko lang to PATT, para ata to sa /update tsaka /delete
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# database model
class User(db.Model):
    __tablename__ = 'users'  # specifies the table name of database
    
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(90), unique=True, nullable=False)
    password = db.Column(db.String(90), nullable=False)
    user_role = db.Column(db.String(90), nullable=False)

    # COPY PASTE NI PATT ====================
    # def __init__(self, username, password, user_role):
    #     self.name = username
    #     self.email = password
    #     self.phone = user_role
    # END NG COPY PASTE NI PATT ====================

# login page
@app.route('/', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        data = request.form
        print(data)
        username = request.form.get('username')
        password = request.form.get('password')
        
        # authenticate user
        user = User.query.filter_by(username=username).first()
        
        if user:
            if password == user.password:
                # if successfully login, redirect to the index/dashboard
                
                return redirect(url_for('index'))
            else:
                # if password is incorrect, flash error message
                flash('Incorrect username or password. Please try again.', category='error')
                return render_template('log_in.html')
        else:
            # if username is invalid, flash error message
            flash('Incorrect username or password. Please try again.', category='error')
            return render_template('log_in.html') 

    
    # render login page
    return render_template('log_in.html')

# logout
@app.route('/logout')
def logout():
    # clear the session data
    session.clear()
    # back to the login page
    return redirect(url_for('login'))   

# index/dashboard
@app.route('/index')
def index():
    return render_template('index.html')

# unit management
@app.route('/unit_mgmt')
#@roles_required('Admin', 'Columbarium Representative') # ADDED BY PATT
def unit_mgmt():
    return render_template('unit_mgmt.html')

# unit record
@app.route('/unit_record')
#@roles_required('Admin', 'Columbarium Representative') # ADDED BY PATT
def unit_record():
    return render_template('unit_record.html')

# payment record
@app.route('/payment_record')
#@roles_required('Admin', 'Cashier') # ADDED BY PATT
def payment_record():
    return render_template('payment_record.html')

# users management
@app.route('/users_mgmt')
#@roles_required('Admin') # ADDED BY PATT
def users_mgmt():

    #inserted by patt para alam ko ano dinagdag ko ====================
    # Fetch user data from the database
    users = User.query.all()
    # Pass the user data to the HTML template for rendering
    return render_template('users_mgmt.html', users=users)
    # end ng ininsert ni patt ====================

    #etong sa baba na to ung originally gawa ni charles
    #return render_template('users_mgmt.html')

# create account
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user_role = request.form.get('user_role')
        
        user_exists = User.query.filter_by(username=username).first()
        if user_exists:
            flash('Username already in use. Please choose a different username.', category='error')
            return redirect(url_for('signup'))
        
        # if len(username) < 8:
        #     flash('Username must be at least 8 characters long', category='error')
        #     return redirect(url_for('signup'))
        
        # if len(password) < 8:
        #     flash('Password must be at least 8 characters long', category='error')
        #     return redirect(url_for('signup'))
        
        new_user = User(username=username, password=password, user_role=user_role)
        db.session.add(new_user)
        db.session.commit()
        flash('User account created successfully!', category='success')
        return redirect(url_for('users_mgmt'))

    return render_template('users_mgmt.html')

# delete user
@app.route('/delete/<int:user_id>', methods=['GET', 'POST'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
        flash("User deleted successfully.", category='success')
    else:
        flash("User not found", category='error')
    return redirect(url_for('users_mgmt'))

# update user
@app.route('/edit/<int:user_id>', methods=['GET', 'POST'])
def edit_user(user_id):
    user = User.query.get(user_id)
    if not user:
        flash("User not found", category='error')
        return redirect(url_for('users_mgmt'))

    if request.method == 'POST':
        # update user information
        user.username = request.form.get('username')
        user.password = request.form.get('password')
        user.user_role = request.form.get('user_role')
        
        db.session.commit()
        flash("User details updated successfully.", category='success')
        return redirect(url_for('users_mgmt'))

    return render_template('edit_user.html', user=user)




if __name__ == '__main__':
    app.run(debug=True)