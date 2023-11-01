import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*", "methods": ["GET", "POST"], "allow_headers": ["Authorization"]}})



@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    name = data['name']
    email = data['email']
    country = data['country']
    phone = data['phone']
    message = data['message']

    from_email = 'your-email@gmail.com'
    to_email = 'm.hasanzubair01@gmail.com'
    password = 'aifh dkxi xxbj ieqm'

    subject = 'New Contact Form Submission'

    msg = MIMEMultipart()
    msg['From'] = "your-email@gmail.com"
    msg['To'] = "m.hasanzubair01@gmail.com"
    msg['Subject'] =  "New Contact Form Submission"

    body = f"Name: {name}\nEmail: {email}\nCountry: {country}\nPhone: {phone}\nMessage: {message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login('m.hasanzubair01@gmail.com', 'aifh dkxi xxbj ieqm')
        server.sendmail(from_email, to_email, msg.as_string())
        server.quit()
        return 'Email sent', 200
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
