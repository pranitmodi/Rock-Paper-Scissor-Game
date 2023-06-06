const res1 = document.getElementById("res1")
const res2 = document.getElementById("res2")
const res3 = document.getElementById("res3")

console.log(res1)
console.log(res2)
console.log(res3)

let counter = 0

reset = () =>
{
    res1.innerText = ""
    res2.innerText = ""
    res3.innerText = ""
    counter = 0
}

let user_choice = ""

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => 
{
    btn.onclick = () => 
    {
        user_choice = btn.value
        calculate()
    }   
})

function calculate()
{
    const choices = ["rock","paper","scissor"]
    const num = Math.floor(Math.random() * choices.length)

    let computer_choice = choices[num]

    console.log("Computer: ", computer_choice)
    console.log("User: ", user_choice)

    res2.innerText = `👱 ${user_choice} vs 🤖 ${computer_choice}`

    if(computer_choice == user_choice)
    {
        res3.innerText = "It's a Draw!"
    }
    else if(computer_choice == "rock" && user_choice == "scissor")
    {
        counter--;
        res3.innerText = "You Lost!"
    }
    else if(computer_choice == "scissor" && user_choice == "paper")
    {
        counter--;
        res3.innerText = "You Lost!"
    }
    else if(computer_choice == "paper" && user_choice == "rock")
    {
        counter--;
        res3.innerText = "You Lost!"
    }
    else
    {
        counter++;
        res3.innerText = "You WON!"
    }

    res1.innerText = counter
}