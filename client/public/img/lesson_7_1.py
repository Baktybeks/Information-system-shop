# lambda, и работа с исключениями
# lambda arguments: expression



# students_ids = [3, 2, 1, 6, 7, 4, 10, 9, 5, 15]
# students_rates = {
#     'azat': 4,
#     'nursultan': 4,
#     'dastan': 4,
#     'urmat': 2,
#     'nurtilek': 6,
#     'baktybek': 5,
#     "el'man": 2,
#     'nazik': 2,
# }
#
# while len(students_ids) != 0:
#     print(students_ids)
#     try:
#         id_s = int(input('student id: '))
#         name = input(f'student name: {id_s} ')
#         rate = int(input(f'student rate: {name} '))
#         if name in students_rates.keys():
#             students_rates[name] += rate
#         else:
#             students_rates[name] = rate
#         students_ids.remove(id_s)
#         print(students_rates)
#     except ValueError:
#         print('по внимательней!')
#
# for k, v in students_rates.items():
#     print(k, ': ', v)


# numbers = [1, 2, 3]
# val_error, ind_error = 0, 0
# while True:
#     try:
#         ind = int(input('введите индекс: '))
#         print(numbers[ind])
#     except:
#         print('чтото не так, либо цифры либо буквы')
#     finally:
#         print('всё!!!')

    # except ValueError:
    #     val_error += 1
    #     print(f'только числа! вы ошиблись {val_error} раз!')
    # except IndexError:
    #     ind_error += 1
    #     print(f'нет такого индекса! вы ошиблись {ind_error} раз!')

# try:
#     print(int('qwe'))
# except ValueError:
#     print('Вводите только числа')


# print(name)


# numbers = [1, 2, 3, 4, 5]
#
# new = list(filter(lambda x: x % 2 == 0, numbers))
# # other = list(map(lambda x: x ** 3, numbers))
# ob = [i for i in numbers if i % 2 == 0]

# print(other)

# lambda_func = lambda a, b: a + b
#
# print(lambda_func(2, 4))

# def up_letter(word):
#     return word.upper()
#
#
# def up_word(lst, func):
#     for i in lst:
#         print(func(i))
#
#
# words = ['python', 'exceptions', 'lambda']
# names = 'beka', 'tima', 'nurlan'
#
# up_word(words, up_letter)
# up_word(words, lambda x: x.title())

# azat :  9
# nursultan :  8
# dastan :  11
# urmat :  4
# nurtilek :  13
# baktybek :  10
# el'man :  4
# nazik :  5
# reina :  5
# kylymbek :  2