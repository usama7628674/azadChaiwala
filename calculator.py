number1 = input("Type first number ")
number2 = input("Type second number ")

print('''
        1. addition
        2. multilication
        3. subtraction
        4. division''')

choice = input('type a number to choose ')

if int(choice) == 1:
    print(int(number1)+int(number2))

elif int(choice) == 2:
    print(number1*number2)
elif int(choice) == 3:
    print(number1-number2)
else:
    print(int(number1)/int(number2))