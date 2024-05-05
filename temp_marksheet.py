import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError
db_file = 'C:\\Users\\PC\\Desktop\\New folder\\report.pdf'
file1 = 'sqlite:///' + db_file
#my_conn = create_engine(file1)
my_conn = create_engine("mysql+mysqldb://root@localhost/web")
try:
    df =pd.read_sql("SELECT record_id, unit_location, name, address, receipt, date_paid FROM unit_record", my_conn)
    my_data = df.values.tolist()
    my_data.insert(0,df.columns)
except SQLAlchemyError as e:
    error = str(e.__dict__['orig'])
    print(error)