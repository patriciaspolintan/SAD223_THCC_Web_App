import random
from flask_mysqldb import MySQL

# Create a MySQL object
mysql = MySQL()

# Configure the MySQL object
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'web'

# Initialize the MySQL object
mysql.init_app(app)

# Get a connection to the database
conn = mysql.connection

# Create a cursor object
cursor = conn.cursor()

# Define the Q-{}/B-{} ranges for all tables
ranges = [
    ("Q-1/B-1", 1, 104),
    ("Q-1/B-9", 693, 776),
    ("Q-1/B-8", 609, 692),
    ("Q-1/B-7", 525, 608),
    ("Q-1/B-6", 441, 524),
    ("Q-1/B-5", 357, 440),
    ("Q-1/B-4", 273, 356),
    ("Q-1/B-3", 189, 272),
    ("Q-1/B-2", 105, 188),
    ("Q-2/B-17", 1365, 1448),
    ("Q-2/B-16", 1281, 1364),
    ("Q-2/B-15", 1197, 1280),
    ("Q-2/B-14", 1113, 1196),
    ("Q-2/B-13", 1029, 1112),
    ("Q-2/B-12", 945, 1028),
    ("Q-2/B-11", 861, 944),
    ("Q-2/B-10", 777, 860),
    ("Q-3/B-25", 2037, 2120),
    ("Q-3/B-24", 1953, 2036),
    ("Q-3/B-23", 1869, 1952),
    ("Q-3/B-22", 1785, 1868),
    ("Q-3/B-21", 1701, 1784),
    ("Q-3/B-20", 1617, 1700),
    ("Q-3/B-19", 1533, 1616),
    ("Q-3/B-18", 1449, 1532),
    ("Q-4/B-33", 2709, 2792),
    ("Q-4/B-32", 2625, 2708),
    ("Q-4/B-31", 2541, 2624),
    ("Q-4/B-30", 2457, 2540),
    ("Q-4/B-29", 2372, 2456),
    ("Q-4/B-28", 2289, 2371),
    ("Q-4/B-27", 2205, 2288),
    ("Q-4/B-26", 2121, 2204),
    ("Q-4/B-34", 2793, 2945),
]

# Execute SQL query
for range_info in ranges:
    q_b_group, start, end = range_info
    for unit_id in range(start, end + 1):
        unit_location = f"{q_b_group}/U-{unit_id}"
        unit_status = random.choice(["available", "sold"])
        sql = f"INSERT INTO unit_mgmt (unit_id, unit_location, unit_status) VALUES ({unit_id}, '{unit_location}', '{unit_status}')"
        cursor.execute(sql)

# Commit the transaction
conn.commit()

# Close the cursor and connection
cursor.close()
conn.close()
