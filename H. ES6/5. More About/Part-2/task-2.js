/* 
একটি Arrow Function লিখো যা ২ সেকেন্ড পর "Hello, after 2 seconds!" দেখাবে।
const delayedMessage = ???; delayedMessage()); 
*/
const delayedMessage = () => {
    setTimeout(() => {
        console.log("Hello, after 2 seconds!");
    }, 2000)
}

delayedMessage()