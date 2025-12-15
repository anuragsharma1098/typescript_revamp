// string methods
// string length

let str: string = "Hello World to TypeScript"

console.log("Length of string - ", str.length)
console.log()
console.log("In upper case: ", str.toUpperCase())
console.log()
console.log("Char At n position: ", str.charAt(7))
console.log()
console.log("Substring: ", str.substring(0, 5))
console.log()
console.log("Include: ", str.includes("Hel"))
console.log("Include: ", str.includes("lapd"))
console.log()
console.log("Starts with: ", str.startsWith("Hell"))
console.log("Ends with: ", str.endsWith("script"))
console.log()
console.log("Replace with: ", str.replace("Hello", "Hi"))
console.log()
let splitStr: string[] = str.split(" ")
console.log("Split: ", splitStr)
console.log()
let newString: string = "abc@mail.com,123456"
let arrSplt: string[] = newString.split(",")
console.log("Email: ", arrSplt[0])
console.log("Code: ", arrSplt[1])
console.log()
let myString = "    Welcome to the new String    "
console.log("Original String: ", myString)
console.log("Trimed String: ",myString.trim())
console.log("trim start string: ",myString.trimStart())
console.log("trim end string: ",myString.trimEnd())
console.log()
str1="Welcome"
str2="Here"
str3="Hi"
console.log("After concat: ",str1.concat(str2))
console.log("After concat: ",str1+str2) //not recommended
console.log("First Concat".concat(" Second"))
console.log(str1.concat(str2).concat(str3))

// concept of string immutability
num=10
let res=num+5
console.log(res)
console.log(num)

// multiline string
let multiline:string=`Welcome 
To 
TypeScript`;
console.log(multiline);
