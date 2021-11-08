# PROTECT-OF-INFORMATION
В папке screenshots скриншоты используемых таблиц популярности слов в русском языке и частотный анализ алфавита.

В папке src файл ceaser отвечает за шифр цезаря и частотный анализ зашифрованного текста.

В папке txt находятся текстовые файлы, куда сохраняется результат.

test - исходный текст
Decod - зашифрованный
analitik - частотный анализ

Для расшифровки использутся метод analizbigram (126 строчка) в файле ceaser.

Алгоритм совмещает в себе анализ монограмм и биграмм, и заключается в следующем:

  1. расчитывается частота встречаемости символов в тексте ( происходит посимвольный разбор, удаление повторяющихся элементов и сортировка по количество повторений в тексте).
  2. Символы в исходном тексте заменяются в соотвествии с частотой встречаемости символов в данном тексте и часототе встречаемости букв в русском языке.

При анализе биграмм вместо символов проверяется символ и следующий за ним.
Частота встречаемости биграмм в русском языке представляет собой 8 самый популярных букв идующих после первой буквы.
