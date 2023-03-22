## Stage 1/4: Read and validate

##### Description

A calculator can carry out various arithmetic operations. Before getting to them, you need to teach your program to read the standard input. It should also "understand" whether the user input is correct or not. Let's start!

##### Objectives

Let's break the task into several steps:

- Start with a message `Enter an arithmetic operation:`
- Read two numbers and one operator on one line from the standard input;
- Check whether the numbers are integers. Numbers could be positive, negative, or zeros;
- Check whether an operator is correct. Operators can be multiplication, division, addition, and subtraction.
- If everything is correct, output the following message: `Operation check passed!` Otherwise, output `Operation check failed!`

You can check a variable with regex expressions. The code snippet below is an example of how you can do it. Feel free to use any method:

```bash
number=72
re='^[0-9]+$'
if [[ "$number" =~ $re ]]; then
    echo "A message!"
else
    echo "Another message!"
fi
```

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Enter an arithmetic operation:
> 66 + 89
Operation check passed!
```

**Example 2**:

```bash
Enter an arithmetic operation:
> -56 - 99
Operation check passed!
```

**Example 3**:

```bash
Enter an arithmetic operation:
> cat / 5
Operation check failed!
```

**Example 4**:

```bash
Enter an arithmetic operation:
> 55 +
Operation check failed!
```

**Example 5**:

```bash
Enter an arithmetic operation:
> 56 + 5665 +
Operation check failed!
```

**Example 6**:

```bash
Enter an arithmetic operation:
> 0.5 + 3
Operation check failed!
```

```bash
#!/usr/bin/env bash

# add your solution
re_int='^[+-]?[0-9]+$'
re_op='^[-,+,*,/]$'
echo "Enter an arithmetic operation:"
read -a arith_op
if [[ ${#arith_op[@]} -eq 3 && ${arith_op[0]} =~ $re_int && ${arith_op[2]} =~ $re_int && ${arith_op[1]} =~ $re_op ]]; then
    echo "Operation check passed!"
else
    echo "Operation check failed!"
fi
```

## Stage 2/4: Let's calculate

##### Description

In this stage, you will learn how to carry out arithmetic operations in bash. Follow the objectives and examples to improve your program. Below is an example of a simple arithmetic operation in bash:

```bash
arithmetic_result=$(( 15 + 8 ))
printf "%s\n" "$arithmetic_result"
```

##### Objectives

Let's break the task into several steps:

- Start with a message, `Enter an arithmetic operation:`;
- Read from the standard input and validate it;
- Carry out an arithmetic operation.
- Print the result of the operation to the standard output.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Enter an arithmetic operation:
> 5.0 + 3
Operation check failed!
```

**Example 2**:

```bash
Enter an arithmetic operation:
> 55 & 3
Operation check failed!
```

**Example 3**:

```bash
Enter an arithmetic operation:
> 55 + 65
120
```

**Example 4**:

```bash
Enter an arithmetic operation:
> 12 * -3
-36
```

**Example 5**:

```bash
Enter an arithmetic operation:
> 48 / 2
24
```

```bash
#!/usr/bin/env bash

# add your solution
re_int='^[+-]?[0-9]+$'
re_op='^[-,+,*,/]$'
echo "Enter an arithmetic operation:"
read -a arith_op
if [[ ${#arith_op[@]} -eq 3 && ${arith_op[0]} =~ $re_int && ${arith_op[2]} =~ $re_int && ${arith_op[1]} =~ $re_op ]]; then
    echo "${arith_op[@]}" | bc
else
    echo "Operation check failed!"
fi
```

## Stage 3/4: This time, floats

##### Description

Let's take a look at more complex arithmetic operations with the `bc` utility. As always, you need to read the user input and validate it. Take into account that, this time, numbers are either integers or floats; exponentiation is added to the operators. Do the arithmetic operation and print the result to the standard output with no more than two digits. Take a look at how you can utilize `bc` in your code:

```bash
arithmetic_result=$(echo "scale=2; 22 / 7" | bc -l)
printf "%s\n" "$arithmetic_result"
```



For more information on the `bc` utility, you can study the [basic expression](https://www.gnu.org/software/bc/manual/html_mono/bc.html#SEC10) section of the bc manual.

##### Objectives

Let's break the task into several steps:

- Start with a message, `Enter an arithmetic operation:`;
- Read the user input and validate it;
- Carry out the arithmetic operations with the help of the `bc` utility;
- Print the result of the arithmetic operation to the standard output.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Enter an arithmetic operation:
> 5 + c
Operation check failed!
```

**Example 2**:

```bash
Enter an arithmetic operation:
> 22 / -7
-3.14
```

**Example 3**:

```bash
Enter an arithmetic operation:
> 5.4 / 2.8
1.92
```

**Example 4**:

```bash
Enter an arithmetic operation:
> 12 * -3
-36
```

**Example 5**:

```bash
Enter an arithmetic operation:
> 5 - -25
30
```

**Example 6**:

```bash
Enter an arithmetic operation:
> 2 ^ 3
8
```

```bash
#!/usr/bin/env bash

# add your solution
re_float="^[+-]?[0-9]+\.?[0-9]*$"
re_op="^[-,+,*,/,^]$"
echo "Enter an arithmetic operation:"
read -a arith_op
if [[ ${#arith_op[@]} -eq 3 && ${arith_op[0]} =~ $re_float && ${arith_op[2]} =~ $re_float && ${arith_op[1]} =~ $re_op ]]; then
    arithmetic_result=$(echo "scale=2; ${arith_op[@]}" | bc -l)
    printf "%s\n" "$arithmetic_result"
else
    echo "Operation check failed!"
fi
```

## Stage 4/4: What was it?

##### Description

Let's add more functionality to the program! A good program always welcomes its users and asks whether they want to quit or carry out another arithmetic operation. It's also a good idea to save the calculation history into a file. Always start with a new file and finish the program with a message.

##### Objectives

- Start with the welcoming message. Your program should print `Welcome to the basic calculator!` at the beginning;
- Ask the user what to do, `Enter an arithmetic operation or type 'quit' to quit:`;
- Read from the standard input and validate it;
- Do the calculations with the help of `bc`;
- Print the results to the standard output;
- Continue until a user enters `quit`;
- Save everything to the *operation_history.txt* file. Including, welcome-farewell messages, inputs, and outputs.
- When the user input is `quit`, output `Goodbye!` and end the program.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the basic calculator!
Enter an arithmetic operation or type 'quit' to quit:
> a * 3
Operation check failed!
Enter an arithmetic operation or type 'quit' to quit:
> 4 / c
Operation check failed!
Enter an arithmetic operation or type 'quit' to quit:
> 2 ^ 5
32
Enter an arithmetic operation or type 'quit' to quit:
> 2 * -18
-36
Enter an arithmetic operation or type 'quit' to quit:
> 15 * -5
-75
Enter an arithmetic operation or type 'quit' to quit:
> -5 * -5
25
Enter an arithmetic operation or type 'quit' to quit:
> 22 / 7
3.14
Enter an arithmetic operation or type 'quit' to quit:
> 1.3 * 7.8
10.14
Enter an arithmetic operation or type 'quit' to quit:
> -5 * 1.8
-9.0
Enter an arithmetic operation or type 'quit' to quit:
> quit
Goodbye!
```

**Example 2**:

Sample content for *operation_history.txt*. Actual file content may differ.

```bash
Welcome to the basic calculator!
Enter an arithmetic operation or type 'quit' to quit:
66 + 89
155
Enter an arithmetic operation or type 'quit' to quit:
174 * 898
156252
Enter an arithmetic operation or type 'quit' to quit:
quit
Goodbye!
```

```bash
#!/usr/bin/env bash

# add your solution
re_all='^-?[0-9]+.?[0-9]* [-+*/^] -?[0-9]+.?[0-9]*$'
echo "Welcome to the basic calculator!" | tee -a operation_history.txt
while true; do
    echo "Enter an arithmetic operation or type 'quit' to quit:" | tee -a operation_history.txt
    read arith_op
    echo "$arith_op" >> operation_history.txt
    if [[ "$arith_op" = "quit" ]]; then
        echo "Goodbye!" | tee -a operation_history.txt
        break
    elif [[ "$arith_op" =~ $re_all ]]; then
        arithmetic_result=$(echo "scale=2; ${arith_op[@]}" | bc -l)
        printf "%s\n" "$arithmetic_result" | tee -a operation_history.txt
    else
        echo "Operation check failed!" | tee -a operation_history.txt
    fi
done
```

