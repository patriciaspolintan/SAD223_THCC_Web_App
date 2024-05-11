<<<<<<< HEAD
# imports
=======
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
from flask import Flask, render_template, request, redirect, url_for, flash, session,Response,send_file
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL,MySQLdb
from flask import jsonify 
import pandas  as pd
from datetime import datetime
from fpdf import FPDF
import os
from sqlalchemy import create_engine
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.platypus.tables import Table, TableStyle, colors
<<<<<<< HEAD
from reportlab.platypus import Paragraph
from io import StringIO
import tempfile
import logging
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Image
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.colors import HexColor
# for unit management
import random
from flask_cors import CORS
import mysql.connector

from sqlalchemy import Column, Integer, String, Enum
from sqlalchemy.orm import relationship

from flask_paginate import Pagination, get_page_parameter
from flask_cors import cross_origin
=======
import tempfile
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
# from flask_wtf import FlaskForm
# from wtforms import StringField, PasswordField, SelectField
# from wtforms.validators import DataRequired, Length, EqualTo

<<<<<<< HEAD

app = Flask(__name__)
CORS(app)
=======
app = Flask(__name__)
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
db_url = "mysql+mysqldb://root@localhost/web"
engine = create_engine(db_url)
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
db = SQLAlchemy(app)


# database model for users_mgmt
class User(db.Model):
    __tablename__ = 'users'  # specifies the table name of database
    
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(90), unique=True, nullable=False)
    password = db.Column(db.String(90), nullable=False)
    user_role = db.Column(db.String(90), nullable=False)

# db model for unit_record
class UnitRecord(db.Model):
    __tablename__ = 'unit_record'
<<<<<<< HEAD

    record_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    unit_location = db.Column(db.String(25), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    receipt = db.Column(db.Integer, default=None)
    date_paid = db.Column(db.Date, default=None)
    amount_paid = db.Column(db.Numeric(10, 2), default=None)
    payment_status = db.Column(db.String(20), default='Ongoing Payment')  # New column for payment status
    plan_id = db.Column(db.Integer, default=None)

# ============================================================
=======
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e

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

# ============================================================

# logout
@app.route('/logout')
def logout():
    # clear the session data
    session.clear()
    # back to the login page
    return redirect(url_for('login'))   

# ============================================================

# index/dashboard
@app.route('/index')
def index():
    return render_template('index.html')

# ============================================================

# unit management
@app.route('/unit_mgmt')
#@roles_required('Admin', 'Columbarium Representative') # ADDED BY PATT
def unit_mgmt():
    return render_template('unit_mgmt.html')

<<<<<<< HEAD
# ============================================================

# unit record
# ETO YUNG CODE SA PAG FETCH NG CSV FILE SA TABLE TO DATABASE
@app.route('/unit_record', methods=['GET', 'POST'])
def unit_record():
    page = request.args.get('page', 1, type=int)
    per_page = 10  # Number of records per page

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

    unit_records = UnitRecord.query.paginate(page=page, per_page=per_page, error_out=False)
    return render_template('unit_record.html', unit_records=unit_records)


def parseCSV(file_path):
    col_names = ['unit_location', 'name', 'address', 'receipt', 'date_paid', 'amount_paid', 'payment_status', 'plan_id']
    csvData = pd.read_csv(file_path, names=col_names, header=None)

    for i, row in csvData.iterrows():
        # NI CONVERT KO YUNG DATE SA FORMAT NUNG CSV FILE NYO
        date_pd = pd.to_datetime(row["date_paid"], format="%m/%d/%Y").date()
        userrec = UnitRecord(
            unit_location=row['unit_location'],
            name=row['name'],
            address=row['address'],
            receipt=row['receipt'],
            date_paid=date_pd, 
            amount_paid=row['amount_paid'],
            payment_status=row['payment_status'],
            plan_id=row['plan_id']
        )
        
        db.session.add(userrec)

    db.session.commit()
    unit_records = UnitRecord.query.all()
    return render_template('unit_record.html', unit_records=unit_records)

# ============================================================
=======
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
    col_names = ['unit_location', 'name', 'address', 'receipt', 'date_paid', 'amount_paid']
    csvData = pd.read_csv(file_path, names=col_names, header=None)

    for i, row in csvData.iterrows():
        # NI CONVERT KO YUNG DATE SA FORMAT NUNG CSV FILE NYO
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

    db.session.commit()
    unit_records = UnitRecord.query.all()
    return render_template('unit_record.html', unit_records=unit_records)



>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e

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

# ============================================================

# create user account
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

# ============================================================

# delete user account
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

# ============================================================

# edit user account
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

# ============================================================

# metrics sa dashboard
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

# @app.route('/total_sales')
# def total_sales():
#     cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
#     cur.execute("SELECT SUM(payment_amount) AS total_sales FROM payment_history WHERE is_additional_service = 'FALSE'")
#     result = cur.fetchone()
#     return jsonify(result)

# ============================================================

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

# edit unit record
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

#delete unit record
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

# ============================================================

# fetch payment record

@app.route('/payment_record')
def payment_record():
    page = request.args.get('page', 1, type=int)
    per_page = 10  # Adjust this value as needed
    payment_records = UnitRecord.query.paginate(page=page, per_page=per_page, error_out=False)
    return render_template('payment_record.html', payment_records=payment_records)

# ============================================================

# SEARCH 

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
        query = "SELECT * FROM users WHERE username LIKE %s OR password LIKE %s ORDER BY user_id ASC LIMIT 20"
        cur.execute(query, ('%' + search_word + '%', '%' + search_word + '%'))
        users = cur.fetchall()
        numrows = len(users)
        html_response = render_template('users_mgmt_response.html', users=users, numrows=numrows)
    return jsonify({'htmlresponse': html_response, 'numrows': numrows})

# search payment_rec
@app.route("/ajaxlivesearchpaymentrec", methods=["POST"])
def ajaxlivesearchpaymentrec():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    search_word = request.json['query']
    print(search_word)
    if search_word == '':
        numrows = 0
        html_response = ""
    else:    
        query = "SELECT * FROM unit_record WHERE name LIKE %s OR address LIKE %s OR unit_location LIKE %s OR CAST(record_id AS CHAR) LIKE %s ORDER BY record_id ASC LIMIT 20"
        cur.execute(query, ('%' + search_word + '%', '%' + search_word + '%', '%' + search_word + '%', '%' + search_word + '%'))
        payment_record = cur.fetchall()
        numrows = len(payment_record)
        html_response = render_template('payment_record_response.html', payment_record=payment_record, numrows=numrows)
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
        query = "SELECT * FROM unit_record WHERE name LIKE %s OR address LIKE %s OR unit_location LIKE %s OR CAST(record_id AS CHAR) LIKE %s ORDER BY record_id ASC LIMIT 20"
        cur.execute(query, ('%' + search_word + '%', '%' + search_word + '%', '%' + search_word + '%', '%' + search_word + '%'))
        unit_records = cur.fetchall()
        numrows = len(unit_records)
        html_response = render_template('unit_mgmt_response.html', unit_records=unit_records, numrows=numrows)
    return jsonify({'htmlresponse': html_response, 'numrows': numrows})

<<<<<<< HEAD
# ============================================================

# download pdf
logging.basicConfig(level=logging.ERROR)
=======
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

>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e


@app.route('/download', methods=['POST'])
def download():
    try:
        # Query database for all records
        df = query_database()
        if not df.empty:
            # Create PDF
            pdf_path = create_pdf(df)
            # Return PDF file
            return send_file(pdf_path, as_attachment=True)
        return jsonify({'error': 'No records found.'}), 404
    except Exception as e:
        logging.error(f"Error generating PDF: {e}")
        return jsonify({'error': 'Error generating PDF'}), 500

def query_database():
    # Query database for all records
    query = "SELECT record_id AS ID, unit_location AS UNITLOCATION, name AS NAME, address AS ADDRESS, receipt AS RECEIPT, date_paid AS DATEPAID FROM unit_record"
    try:
        df = pd.read_sql(query, engine)
        return df
    except Exception as e:
        logging.error(f"Error querying database: {e}")
        return None

def create_pdf(df):
    temp_pdf = tempfile.NamedTemporaryFile(delete=False)
    my_doc = SimpleDocTemplate(temp_pdf.name, pagesize=letter)

    # Add header title and logo
    header_title = Paragraph("Unit Record Report", ParagraphStyle(name='header', fontName='Helvetica-Bold', fontSize=18, leading=22, alignment=TA_CENTER))
    # logo_path = 'path/to/columb_logo.png'
    # logo = Image(logo_path, width=1*inch, height=0.5*inch)
    elements = [header_title]

    # Create table
    c_width = [1.2*inch] * len(df.columns)
    t = Table([df.columns.tolist()] + df.values.tolist(), colWidths=c_width, repeatRows=1)
    t.setStyle(TableStyle([('FONTSIZE',(0,0),(-1,-1),6), ('BACKGROUND' ,(0,0),(-1,0),HexColor('#80CB85')), ('VALIGN',(0,0),(-1,0),'TOP')]))
    elements.append(t)

    my_doc.build(elements)

    return temp_pdf.name

@app.route('/search_results', methods=['GET'])
def search_results():
    category = request.args.get('category')
    if category:
        # Query database based on category
        df = query_database(category)
        if not df.empty:
            # Create PDF
            pdf_file = create_pdf(df)
            return send_file(pdf_file, mimetype='application/pdf', as_attachment=True, attachment_filename='unit_record_report.pdf')
        else:
            return jsonify({'error': 'No records found for this category.'}), 404
    else:
        return jsonify({'error': 'No category provided.'}), 400

# ============================================================

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

# ============================================================

# TO CHARLES FROM PAT. ETO YUNG PARA SA PAYMENT STATUS

# Route for updating payment status to 'ongoing payment' after a payment is made
@app.route('/make_payment', methods=['POST'])
def make_payment():
    record_id = request.json['record_id']  # Assuming you're passing record_id in the request JSON
    record = UnitRecord.query.get(record_id)
    if record:
        record.payment_status = 'Ongoing Payment'
        db.session.commit()
        return 'Payment made successfully', 200
    else:
        return 'Record not found', 404

# Route for checking pending payments for a record
@app.route('/check_pending_payments/<int:record_id>', methods=['GET'])
def check_pending_payments(record_id):
    pending_payments = UnitRecord.query.filter_by(record_id=record_id, payment_status='Pending Payment').count()
    return {'pending_payments': pending_payments}, 200

# Route for updating payment status to 'completed payment' if there are no pending payments
@app.route('/update_payment_status/<int:record_id>', methods=['POST'])
def update_payment_status(record_id):
    pending_payments = UnitRecord.query.filter_by(record_id=record_id, payment_status='Pending Payment').count()
    if pending_payments == 0:
        record = UnitRecord.query.get(record_id)
        if record:
            record.payment_status = 'Completed Payment'
            db.session.commit()
            return 'Payment status updated to completed payment', 200
        else:
            return 'Record not found', 404
    else:
        return 'There are still pending payments for this record', 400
    

# ============================================================
from flask import send_from_directory
# unit management, change colors thingy
@app.route('/api/unit_mgmt', methods=['GET'])
def get_unit_mgmt():
    # Get a connection to the database
    conn = mysql.connection
    # Create a cursor object
    cur = conn.cursor()
    # Execute a query
    cur.execute("SELECT * FROM unit_mgmt")
    # Fetch the results
    results = cur.fetchall()

    # Return the results as JSON
    return jsonify(results)

# unit management connection sa website
@app.route('/static/<path:filename>')
def send_static(filename):
    return send_from_directory(app.static_folder, filename)


# ============================================================

# role login




# ============================================================
if __name__ == '__main__':
    app.run(debug=True)