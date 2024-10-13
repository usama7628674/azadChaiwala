# Task 1
numbers = [10,15,12,16,20]
divisible = []
for num in numbers:
    if num % 5 == 0:
        divisible.append(num)

print("numbers divisible by 5 are:",divisible)

# Task 2

decimal = 18
print(bin(decimal))
print(oct(decimal))
print(hex(decimal))

# Task 3
char = 'a'
print("The ascii value of " + char + " is:",ord(char))

# Task 4
def print_factors(x):
   print("The factors of",x,"are:")
   for i in range(1, x + 1):
       if x % i == 0:
           print(i)

num = 320

print_factors(num)

#Task 5 

number1 = int(input("Type first number "))
number2 = int(input("Type second number "))

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

# Task 6

import calendar
yy = 2024
mm = 11  
print(calendar.month(yy, mm))

# Task 7

# Factorial of a number using recursion

def recur_factorial(n):
   if n == 1:
       return n
   else:
       return n*recur_factorial(n-1)

num = 6

print("The factorial of", num, "is", recur_factorial(num))