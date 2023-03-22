## Stage 1/5: Check the definition

##### Description

A unit converter converts different units. Before getting to the actual conversion, let's teach your program to read the standard input. It should also understand whether the user input is correct or not.

##### Objectives

Let's break the task into several steps:

- Start with the message `Enter a definition:`
- Read a string and a number on one line from the standard input;
- Check whether the string is correct. The string should have the following format: `unitone_to_unittwo`;
- Check whether the numbers are integers or floats. Numbers could be positive, negative, or zeros;
- If everything is correct, output the following message: `The definition is correct!` Otherwise, output `The definition is incorrect!`

You can read a user input as an array. The code snippet below is an example of how you can do it. Feel free to use any method:

```bash
read -a user_input
arr_length="${#user_input[@]}"
definition="${user_input[0]}"
constant="${user_input[1]}"
echo "$arr_length"
echo "$definition"
echo "$constant"
```

You can check a variable with regex expressions. The code snippet below is an example of how you can do it. Feel free to use any method:

```bash
string="universe"
re='^[A-Za-z]+$'
if [[ "$string" =~ $re ]]; then
    echo "A message!"
else
    echo "Another message!"
fi
```

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Enter a definition:
> feet_to_meter 0.304
The definition is correct!
```

**Example 2**:

```bash
Enter a definition:
> miles_to_km 1.6
The definition is correct!
```

**Example 3**:

```bash
Enter a definition:
> kgtoounce 35.27
The definition is incorrect!
```

**Example 4**:

```bash
Enter a definition:
> kg_to_ounce 35.27 gr
The definition is incorrect!
```

**Example 5**:

```bash
Enter a definition:
> feet_to_meter
The definition is incorrect!
```

**Example 6**:

```bash
Enter a definition:
>
The definition is incorrect!
```

```bash
#!/usr/bin/bash

# write your code here
echo "Enter a definition:"
read string num
re='[a-z]+_to_[a-z]+'
re_number="^[+-]?[0-9]+\.?[0-9]*$"
if [[ "$string" =~ $re ]] && [[ $num =~ $re_number ]]; then
    echo "The definition is correct!"
else
    echo "The definition is incorrect!"
fi
```

## Stage 2/5: Do the conversion

##### Description

In this stage, your program will learn how to convert units. Follow the objectives and examples to improve your program. Below is an example of a simple conversion in bash:

```bash
constant=1.6
value=10
result=$(echo "scale=2; $constant * $value" | bc -l)
printf "Result: %s\n" "$result"
```

##### Objectives

Let's break the task into several steps:

- Start with the message `Enter a definition:`;
- Check whether the user input is correct;
- Ask for the value to convert `Enter a value to convert:`
- Check whether the user input is correct;
- Carry out the conversion;
- Print the result of the conversion to the standard output.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Enter a definition:
> metertocm 100
The definition is incorrect!
```

**Example 2**:

```bash
Enter a definition:
> meter_to_cm 100
Enter a value to convert:
> 5
Result: 500
```

**Example 3**:

```bash
Enter a definition:
> miles_to_km 1.6
Enter a value to convert:
> five
Enter a float or integer value!
>
Enter a float or integer value!
> 5
Result: 8.0
```

```bash
#!/usr/bin/bash

# write your code here
echo "Enter a definition:"
read string constant
re_str='[a-z]+_to_[a-z]+'
re_number="^[+-]?[0-9]+\.?[0-9]*$"
if [[ "$string" =~ $re_str ]] && [[ $constant =~ $re_number ]]; then
    echo "Enter a value to convert:"
    read value
    while [[ ! $value =~ $re_number ]]; do
        echo "Enter a float or integer value!"
        read value
    done
    result=$(echo "scale=2; $constant * $value" | bc -l)
    printf "Result: %s\n" "$result"
else
    echo "The definition is incorrect!"
fi
```

## Stage 3/5: Create the menu

##### Description

Add a menu to your program and ask users what to do. If users select to end the program, quit with a farewell message.

##### Objectives

Let's break the task into several steps:

- Start with a message `Welcome to the Simple converter!`
- Ask for an option:

```bash
Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
```

- Check whether the option is correct;
- If the option is incorrect, output `Invalid option!`
- If the option is correct, go to the selected menu and output `Not implemented!`
- Continue until a user enters `quit` or `0`;
- When users want to quit, output `Goodbye!`

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 1
Not implemented!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 2
Not implemented!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 3
Not implemented!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

**Example 2**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 5
Invalid option!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
>
Invalid option!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> one
Invalid option!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

```bash
#!/usr/bin/bash

# write your code here
select_option() {
    echo
    echo "Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition"
    read option
}
echo "Welcome to the Simple converter!"
while true; do
    select_option
    case $option in
        0|quit)
            echo "Goodbye!"
            exit;;
        1|2|3)
            echo "Not implemented!";;
        *)
            echo "Invalid option!";;
    esac
done
```

## Stage 4/5: Persistence

##### Description

Time to work on the menu items. Let's implement the `Add a definition` and `Delete a definition` menu items.

##### Objectives

Let's break the task into several steps:

- Start with the welcome message `Welcome to the Simple converter!`

- Ask for the option;

- Check whether the option is correct;

- If the option is incorrect, respond with the message;

- If the option is correct, go to the selected menu;

- If users select `Convert units`, output `Not implemented!`

- If users select

   

  ```bash
  Add a definition
  ```

  :

  - Output `Enter a definition:`
  - Check if the definition is correct
  - If the definition is incorrect, output `The definition is incorrect!`;
  - If the definition is correct, add it to the *definitions.txt*;
  - Return to the main menu.

- If users select

   

  ```bash
  Delete the definition
  ```

  ;

  - Output the recorded definitions;
  - If there are no definitions in the file, output `Please add a definition first!`
  - Ask for the line number to delete with `Type the line number to delete or '0' to return`;
  - Check if the line number is correct;
  - If the line number is incorrect, output `Enter a valid line number!`;
  - If the line number is correct, delete that line from *definitions.txt*;
  - Return to the main menu.

- Continue until users enter `quit` or `0`;

- When users want to quit, output `Goodbye!`;

The code snippet below is an example of how you can add or delete lines. Feel free to use any method:

```bash
# to add a line
file_name="definitions.txt"
line="miles_to_meter 1.6"
echo "$line" >> "$file_name"

# to delete a line
line_number=1
sed -i "${line_number}d" "$file_name"
```

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 5
Invalid option!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
>
Invalid option!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 1
Not implemented!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 3
Please add a definition first!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

**Example 2**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 2
Enter a definition:
> metertocm 100
The definition is incorrect!
Enter a definition:
> meter_to_cm 100

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 2
Enter a definition:
> miles_to_km 1.6

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

**Example 3**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 3
Type the line number to delete or '0' to return
1. meter_to_cm 100
2. miles_to_km 1.6
> 0

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 3
Type the line number to delete or '0' to return
1. meter_to_cm 100
2. miles_to_km 1.6
> 5
Enter a valid line number!
> 2

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 3
Type the line number to delete or '0' to return
1. meter_to_cm 100
> 1

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 3
Please add a definition first!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

```bash
#!/usr/bin/bash

# write your code here
select_option() {
    echo
    echo "Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition"
    read option
}
echo "Welcome to the Simple converter!"
while true; do
    select_option
    case $option in
        0|quit)
            echo "Goodbye!"
            exit;;
        1)
            echo "Not implemented!";;
        2)
            echo "Enter a definition:"
            read string constant
            re_str='[a-z]+_to_[a-z]+'
            re_number="^[+-]?[0-9]+\.?[0-9]*$"
            while [[ ! "$string" =~ $re_str || ! $constant =~ $re_number ]]; do
                echo "The definition is incorrect!"
                echo "Enter a definition:"
                read string constant
            done
            echo $string $constant >> definitions.txt;;
        3)
            if [ -s definitions.txt ]; then
                echo "Type the line number to delete or '0' to return"
                mapfile def_lines < definitions.txt
                for (( i=0; i<${#def_lines[@]}; i++ )); do
                    echo -n "$((i+1)). ${def_lines[i]}"
                done
                read ln_num
                lns=$(wc -l < definitions.txt)
                while true; do
                    if [[ $ln_num -gt 0 && $ln_num -le $lns ]]; then
                        sed -i "${ln_num}d" definitions.txt
                        break
                    elif [[ $ln_num = 0 ]]; then
                        break
                    else
                        echo "Enter a valid line number!"
                        read ln_num
                    fi
                done
            else
                echo "Please add a definition first!"
            fi;;
        *)
            echo "Invalid option!";;
    esac
done
```

## Stage 5/5: All of them

##### Description

Now, we will implement the `Convert units` menu item and finish our project. Your task is to list the definitions stored in the file. Calculate the value and print it to the standard output.

##### Objectives

Let's break the task into several steps:

- Start with the welcome message `Welcome to the Simple converter!`

- Ask for the option;

- Check whether the option is correct;

- If the option is incorrect, respond with the message;

- If the option is correct, go to the selected menu;

- If users select

   

  ```bash
  Convert units
  ```

  ;

  - Output recorded definitions.
  - If there isn't any definition in the file, output `Please add a definition first!`;
  - Ask for the line number to convert the unit `Type the line number to convert units or '0' to return`;
  - Check if the line number is correct;
  - If the line number is incorrect, output `Enter a valid line number!`;
  - If the line number is correct; ask for a value to convert `Enter a value to convert:`;
  - Check whether the user input is correct;
  - If the user input is incorrect, output `Enter a float or integer value!`;
  - If the user input is correct, do the conversion and print to the standard output;
  - Return to the main menu;

- If users select `Add a definition`, do as implemented;

- If users select `Delete a definition`, do as implemented;

- Continue until users enter `quit` or `0`;

- When users want to quit, output `Goodbye!`

The code snippet below is an example of how you can read a line. Feel free to use any method:

```bash
file_name="definitions.txt"
line_number=1
line=$(sed "${line_number}!d" "$file_name")
read -a text <<< "$line"
```

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 1
Please add a definition first!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

**Example 2**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 2
Enter a definition:
> feet_to_meter 0.33

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 2
Enter a definition:
> miles_to_km 1.6

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

**Example 3**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 1
Type the line number to convert units or '0' to return
1. feet_to_meter 0.33
2. miles_to_km 1.6
> 0

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

**Example 4**:

```bash
Welcome to the Simple converter!

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 1
Type the line number to convert units or '0' to return
1. feet_to_meter 0.33
2. miles_to_km 1.6
> 5
Enter a valid line number!
> 2
Enter a value to convert:
ten
Enter a float or integer value!
> 10
Result: 16.0

Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition
> 0
Goodbye!
```

```bash
#!/usr/bin/bash

# write your code here
re_str='[a-z]+_to_[a-z]+'
re_number="^[+-]?[0-9]+\.?[0-9]*$"
select_option() {
    echo
    echo "Select an option
0. Type '0' or 'quit' to end program
1. Convert units
2. Add a definition
3. Delete a definition"
    read option
}
select_ln_num() {
    mapfile def_lines < definitions.txt
    for (( i=0; i<${#def_lines[@]}; i++ )); do
        echo -n "$((i+1)). ${def_lines[i]}"
    done
    read ln_num
    lns=$(wc -l < definitions.txt)
}
conv() {
    echo "Enter a value to convert:"
    read value
    while [[ ! $value =~ $re_number ]]; do
        echo "Enter a float or integer value!"
        read value
    done
    constant=$(sed -n "${ln_num}p" definitions.txt | cut -d " " -f 2)
    result=$(echo "scale=2; $constant * $value" | bc -l)
    printf "Result: %s\n" "$result"
}
echo "Welcome to the Simple converter!"
while true; do
    select_option
    case $option in
        0|quit)
            echo "Goodbye!"
            exit;;
        1)
            if [ -s definitions.txt ]; then
                echo "Type the line number to convert units or '0' to return"
                select_ln_num
                while true; do
                    if [[ $ln_num -gt 0 && $ln_num -le $lns ]]; then
                        conv
                        break
                    elif [[ $ln_num = 0 ]]; then
                        break
                    else
                        echo "Enter a valid line number!"
                        read ln_num
                    fi
                done
            else
                echo "Please add a definition first!"
            fi;;
        2)
            echo "Enter a definition:"
            read string constant
            while [[ ! "$string" =~ $re_str || ! $constant =~ $re_number ]]; do
                echo "The definition is incorrect!"
                echo "Enter a definition:"
                read string constant
            done
            echo $string $constant >> definitions.txt;;
        3)
            if [ -s definitions.txt ]; then
                echo "Type the line number to delete or '0' to return"
                select_ln_num
                while true; do
                    if [[ $ln_num -gt 0 && $ln_num -le $lns ]]; then
                        sed -i "${ln_num}d" definitions.txt
                        break
                    elif [[ $ln_num = 0 ]]; then
                        break
                    else
                        echo "Enter a valid line number!"
                        read ln_num
                    fi
                done
            else
                echo "Please add a definition first!"
            fi;;
        *)
            echo "Invalid option!";;
    esac
done
```

