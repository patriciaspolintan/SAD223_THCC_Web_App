from flask import Flask, render_template, request, redirect, url_for, flash, session,Response,send_file
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL,MySQLdb
from flask import jsonify 
<<<<<<< HEAD
import pandas  as pd
from datetime import datetime
from fpdf import FPDF
=======
# ==========
import pandas  as pd
from datetime import datetime


>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b
import os
from sqlalchemy import create_engine
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.platypus.tables import Table, TableStyle, colors
import tempfile
# from flask_wtf import FlaskForm
# from wtforms import StringField, PasswordField, SelectField
# from wtforms.validators import DataRequired, Length, EqualTo

app = Flask(__name__)
<<<<<<< HEAD
db_url = "mysql+mysqldb://root@localhost/web"
engine = create_engine(db_url)
=======
>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
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

# PATT
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'web'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)
#

db = SQLAlchemy(app)

# database model
class User(db.Model):
    __tablename__ = 'users'  # specifies the table name of database
    
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(90), unique=True, nullable=False)
    password = db.Column(db.String(90), nullable=False)
    user_role = db.Column(db.String(90), nullable=False)

<<<<<<< HEAD
# db model for unit_record
class UnitRecord(db.Model):
    __tablename__ = 'unit_record'
=======

>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b

    record_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    unit_location = db.Column(db.String(25), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    receipt = db.Column(db.Integer, default=None)
    date_paid = db.Column(db.Date, default=None)
    amount_paid = db.Column(db.Numeric(10, 2), default=None)
    payment_status = db.Column(db.String(20), default='ongoing payment')  # New column for payment status
    
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
# @app.route('/unit_record')
# #@roles_required('Admin', 'Columbarium Representative') # ADDED BY PATT
# def unit_record():
#     return render_template('unit_record.html')

# unit record
# ETO YUNG CODE SA PAG FETCH NG CSV FILE SA TABLE TO DATABASE
@app.route('/unit_record', methods=['GET', 'POST'])
def unit_record():
    if request.method == 'POST':
        # Handle file upload
        uploaded_file = request.files['file']
        if uploaded_file.filename != '':
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], uploaded_file.filename)
            uploaded_file.save(file_path)
            parseCSV(file_path)
            flash('Data inserted successfully!', category='success')
            return redirect(url_for('unit_record'))
        else:
            flash('No file selected!', category='error')
            return redirect(url_for('unit_record'))
    unit_records = UnitRecord.query.all()
    return render_template('unit_record.html', unit_records=unit_records)

def parseCSV(file_path):
<<<<<<< HEAD
    col_names = ['unit_location', 'name', 'address', 'receipt', 'date_paid', 'amount_paid']
=======
    col_names = ['unit_loc', 'name', 'address', 'receipt_no', 'date_paid', 'amount_paid']
>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b
    csvData = pd.read_csv(file_path, names=col_names, header=None)

    for i, row in csvData.iterrows():
        # NI CONVERT KO YUNG DATE SA FORMAT NUNG CSV FILE NYO
<<<<<<< HEAD
        date_pd = pd.to_datetime(row["date_paid"], format="%m/%d/%Y").date()
        userrec = UnitRecord(
            unit_location=row['unit_location'],
            name=row['name'],
            address=row['address'],
            receipt=row['receipt'],
            date_paid=date_pd, 
            amount_paid=row['amount_paid']
        )
        
        db.session.add(userrec)
=======
        date_paid = pd.to_datetime(row["date_paid"], format="%m/%d/%Y").date()
        user = UnitRecord(
            unit_loc=row['unit_loc'],
            name=row['name'],
            address=row['address'],
            receipt_no=row['receipt_no'],
            date_paid=date_paid, 
            amount_paid=row['amount_paid']
        )
        
        db.session.add(user)
>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b

    db.session.commit()
    unit_records = UnitRecord.query.all()
    return render_template('unit_record.html', unit_records=unit_records)

<<<<<<< HEAD

=======
>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b


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

# search users_mgmt



@app.route('/total_sold_units')
def total_sold_units():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT COUNT(*) AS total_sold_units FROM unit_mgmt WHERE unit_status = 'sold'")
    result = cur.fetchone()
    return jsonify(result)

@app.route('/total_available_units')
def total_available_units():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT COUNT(*) AS total_available_units FROM unit_mgmt WHERE unit_status = 'available'")
    result = cur.fetchone()
    return jsonify(result)

@app.route('/total_sales')
def total_sales():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT SUM(payment_amount) AS total_sales FROM payment_history WHERE is_additional_service = 'FALSE'")
    result = cur.fetchone()
    return jsonify(result)





# db model for unit_mgmt
class UnitManagement(db.Model):
    __tablename__ = 'unit_mgmt'

    unit_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    unit_location = db.Column(db.String(25), nullable=False)
    unit_status = db.Column(db.Enum('sold', 'available'), default='available')

# add unit record
@app.route('/add_unitrecord', methods=['GET', 'POST'])
def add_record():
    if request.method == 'POST':
        name = request.form.get('name')
        address = request.form.get('address')
        quadrant = request.form.get('quadrant')
        block = request.form.get('block')
        unit = request.form.get('unit')
        
        if not (name and address and quadrant and block and unit):
            flash('Please fill in all required fields', category='error')
            return redirect(url_for('unit_record'))
        
        unit_location = f'{quadrant} / {block} / {unit}'
        
        try:
            new_record = UnitRecord(unit_location=unit_location, name=name, address=address)
            db.session.add(new_record)
            db.session.commit()
            flash('Record added successfully', category='success')
        except Exception as e:
            flash('An error occurred while adding the record', category='error')
            print(e)
            return redirect(url_for('unit_record'))
        
        return redirect(url_for('unit_record'))


@app.route('/update_unit_record/<int:record_id>', methods=['POST'])
def update_unit_record(record_id):
    record = UnitRecord.query.get(record_id)
    if not record:
        flash("Record not found", category='error')
        return redirect(url_for('unit_record'))

    if request.method == 'POST':
        # Retrieve form data
        name = request.form.get('name')
        address = request.form.get('address')
        quadrant = request.form.get('quadrant2')
        block = request.form.get('block2')
        unit = request.form.get('unit2')
        
        # Update record fields
        if name:
            record.name = name
        if address:
            record.address = address
        
        if quadrant and block and unit:
            record.unit_location = f"{quadrant} / {block} / {unit}"
        else:
            flash("Quadrant, block, and unit are required fields", category='error')
            return redirect(request.referrer)

        try:
            # Commit changes to the database
            db.session.commit()
            flash("Record details updated successfully", category='success')
        except Exception as e:
            db.session.rollback()
            flash(f"An error occurred: {str(e)}", category='error')
            return redirect(request.referrer)

        return redirect(url_for('unit_record'))

    # If request method is not POST, render the template with the record data
    return render_template('unit_record.html', record=record)



@app.route('/delete2/<int:record_id>', methods=['GET', 'POST'])
def delete_unit_record(record_id):
    record = UnitRecord.query.get(record_id)
    
    if record:
        try:
            db.session.delete(record)
            db.session.commit()
            flash("Record deleted successfully.", category='success')
        except Exception as e:
            db.session.rollback()
            flash(f"An error occurred: {str(e)}", category='error')
    else:
        flash("Record not found", category='error')
    return redirect(url_for('unit_record'))
@app.route('/payment_record')
def payment_record():
    payment_records = UnitRecord.query.all()
    return render_template('payment_record.html', payment_records=payment_records)



# search users_mgmt
@app.route("/ajaxlivesearch", methods=["POST", "GET"])
def ajaxlivesearch():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    if request.method == 'POST':
        search_word = request.form['query']
    else:
        search_word = request.args.get('search_text', '')
    print(search_word)
    if search_word == '':
        numrows = 0
        html_response = ""
    else:    
        query = "SELECT * FROM users WHERE username LIKE %s OR password LIKE %s ORDER BY user_id DESC LIMIT 20"
        cur.execute(query, ('%' + search_word + '%', '%' + search_word + '%'))
        users = cur.fetchall()
        numrows = len(users)
        html_response = render_template('users_mgmt_response.html', users=users, numrows=numrows)
    return jsonify({'htmlresponse': html_response, 'numrows': numrows})

# search unit_rec
@app.route("/ajaxlivesearchunitrec", methods=["POST", "GET"])
def ajaxlivesearchunitrec():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    if request.method == 'POST':
        search_word = request.form['query']
    else:
        search_word = request.args.get('search_text', '')
    print(search_word)
    if search_word == '':
        numrows = 0
        html_response = ""
    else:    
        query = "SELECT * FROM unit_record WHERE name LIKE %s OR address LIKE %s OR unit_location LIKE %s OR CAST(record_id AS CHAR) LIKE %s ORDER BY record_id DESC LIMIT 20"
        cur.execute(query, ('%' + search_word + '%', '%' + search_word + '%', '%' + search_word + '%', '%' + search_word + '%'))
        unit_records = cur.fetchall()
        numrows = len(unit_records)
        html_response = render_template('unit_mgmt_response.html', unit_records=unit_records, numrows=numrows)
    return jsonify({'htmlresponse': html_response, 'numrows': numrows})

@app.route('/download', methods=['POST'])
def download():
    # Query database for all records
    query = "SELECT record_id, unit_location, name, address, receipt, date_paid FROM unit_record"
    df = pd.read_sql(query, engine)

    if not df.empty:
        # Create PDF
        pdf_path = create_pdf(df)
        # Return PDF file
        return send_file(pdf_path, as_attachment=True)

    return jsonify({'error': 'No records found.'}), 404

def query_database(category):       
    # Query database based on category
    query = f"SELECT record_id, unit_location, name, address, receipt, date_paid FROM unit_record WHERE category = '{category}'"
    try:
        df = pd.read_sql(query, engine)
        return df
    except Exception as e:
        print(f"Error querying database: {e}")
        return None

def create_pdf(df):
    temp_pdf = tempfile.NamedTemporaryFile(delete=False)
    my_doc = SimpleDocTemplate(temp_pdf.name, pagesize=letter)

    c_width = [1.2*inch] * len(df.columns)
    t = Table([df.columns.tolist()] + df.values.tolist(), colWidths=c_width, repeatRows=1)
    t.setStyle(TableStyle([('FONTSIZE',(0,0),(-1,-1),5), ('BACKGROUND' ,(0,0),(-1,0),colors.aqua), ('VALIGN',(0,0),(-1,0),'TOP')]))
    elements = [t]
    my_doc.build(elements)
    return temp_pdf.name



# charts pero di pa tapos
@app.route('/monthly_units_sold')
def monthly_units_sold():
    # Retrieve monthly units sold data from your database
    # Example: Assuming you have a UnitRecord model with date_paid and unit_location columns
    monthly_data = {
        'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'data': []  # Initialize an empty list to store the data
    }

    # Query the database to get monthly units sold
    for month in monthly_data['labels']:
        # Example: Count the number of units sold for each month
        units_sold = UnitRecord.query.filter(UnitRecord.date_paid.like(f'%{month}%')).count()
        monthly_data['data'].append(units_sold)

    return jsonify(monthly_data)

@app.route('/monthly_sales')
def monthly_sales():
    # Retrieve monthly sales data from your database
    # Example: Assuming you have a UnitRecord model with date_paid and amount_paid columns
    monthly_data = {
        'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'data': []  # Initialize an empty list to store the data
    }

    # Query the database to get monthly sales
    for month in monthly_data['labels']:
        # Example: Calculate the total sales amount for each month
        total_sales = UnitRecord.query.filter(UnitRecord.date_paid.like(f'%{month}%')).with_entities(UnitRecord.amount_paid).all()
        total_sales_amount = sum(amount[0] for amount in total_sales)
        monthly_data['data'].append(total_sales_amount)

    return jsonify(monthly_data)


@app.route('/total_sold_units')
def total_sold_units():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT COUNT(*) AS total_sold_units FROM unit_mgmt WHERE unit_status = 'sold'")
    result = cur.fetchone()
    return jsonify(result)

@app.route('/total_available_units')
def total_available_units():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT COUNT(*) AS total_available_units FROM unit_mgmt WHERE unit_status = 'available'")
    result = cur.fetchone()
    return jsonify(result)

@app.route('/total_sales')
def total_sales():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT SUM(payment_amount) AS total_sales FROM payment_history WHERE is_additional_service = 'FALSE'")
    result = cur.fetchone()
    return jsonify(result)



# db model for unit_record
class UnitRecord(db.Model):
    __tablename__ = 'unit_record'

    record_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    unit_location = db.Column(db.String(25), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    receipt = db.Column(db.Integer, default=None)
    date_paid = db.Column(db.Date, default=None)
    amount_paid = db.Column(db.Numeric(10, 2), default=None)
    payment_status = db.Column(db.String(20), default='ongoing payment')  # New column for payment status
    

# db model for unit_mgmt
class UnitManagement(db.Model):
    __tablename__ = 'unit_mgmt'

    unit_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    unit_location = db.Column(db.String(25), nullable=False)
    unit_status = db.Column(db.Enum('sold', 'available'), default='available')

# add unit record
@app.route('/add_record', methods=['GET', 'POST'])
def add_record():
    if request.method == 'POST':
        name = request.form.get('name')
        address = request.form.get('address')
        quadrant = request.form.get('quadrant')
        block = request.form.get('block')
        unit = request.form.get('unit')
        
        if not (name and address and quadrant and block and unit):
            flash('Please fill in all required fields', category='error')
            return redirect(url_for('unit_record'))
        
        unit_location = f'{quadrant} / {block} / {unit}'
        
        try:
            # create a new UnitRecord instance with NULL values for receipt, date_paid, and amount_paid
            new_record = UnitRecord(unit_location=unit_location, name=name, address=address, receipt=None, date_paid=None, amount_paid=None)
            db.session.add(new_record)
            
            unit_mgmt_entry = UnitManagement.query.filter_by(unit_location=unit_location).first()
            if unit_mgmt_entry:
                # update the unit_status to 'sold'
                unit_mgmt_entry.unit_status = 'sold'
            
            db.session.commit()
            flash('Record added successfully', category='success')
        except Exception as e:
            flash('An error occurred while adding the record', category='error')
            print(e)
            return redirect(url_for('unit_record'))  
        
        return redirect(url_for('unit_record'))   


@app.route('/update_unit_record', methods=['POST'])
def update_unit_record():
    if request.method == 'POST':
        record_id = request.form.get('record_id')
        name = request.form.get('name')
        address = request.form.get('address')
        unit_location = request.form.get('unit_location')
        receipt = request.form.get('receipt')
        date_paid = request.form.get('date_paid')
        amount_paid = request.form.get('amount_paid')

        unit_record = UnitRecord.query.get(record_id)
        if unit_record:
            unit_record.name = name
            unit_record.address = address
            unit_record.unit_location = unit_location
            unit_record.receipt = receipt
            unit_record.date_paid = date_paid
            unit_record.amount_paid = amount_paid

            db.session.commit()

    return redirect(request.referrer or url_for('unit_record'))


@app.route('/delete_unit_record', methods=['POST'])
def delete_unit_record():
    if request.method == 'POST':
        record_id = request.form.get('record_id')
        unit_record = UnitRecord.query.get(record_id)

        if unit_record:
            db.session.delete(unit_record)

            db.session.commit()
            flash('Record deleted successfully', category='success')
        else:
            flash('Record not found', category='error')

    
    return redirect(request.referrer or url_for('unit_record'))





if __name__ == '__main__':
    app.run(debug=True)