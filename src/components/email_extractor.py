import re
str_ = "suidhfu sdufbsdf Abhi2001.varanasi@gmail.ac.in abhi201.varanasi@gmail.com"
emails = re.findall(r'[\w\.\d]+@[\w\d]+\.(?:com|ac\.in|io|ai)', str_)
print(emails)