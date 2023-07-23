from truecallerpy import search_phonenumber

installation_id = "a1i0j--d3ZiZPkZVY2BC5Jutz-e2ePq4CEVsOW2MYivkB0MzTz-PY5kjw6eQpLys"

Desirable = ['phones', 'addresses', 'internetAddresses']
myarray = [
        'nameFeedback', 'cacheTtl', 'sources', 'searchWarnings', 'surveys',
        'commentsStats', 'nationalFormat', 'id', 'imId'
        ]

user_number = input('Enter Number : ')
a = search_phonenumber(user_number, "IN", installation_id)

try:
    data = a['data'][0]
    print()
    try:
        for i, j in data.items():
            if i not in myarray and i in Desirable:
                print(i, ": ", j[0])
            else:
                print(i, ": ", j)
    except:
        print("No Data available")

except:
    print("Something Must've been wrong")

input('\nHit Enter')
# ==> search_phonenumber("+12093031250","IN", id)
