/* 
৪. একটা gadget অবজেক্ট বানা, যার মধ্যে name iPhone, price 120000, আর color Black থাকবে। delete ব্যবহার করে price ডিলিট কর।
 */
const gadget = {
    name: 'iPhone',
    price: 120000,
    color: 'Black'
}
delete gadget.price;
console.log(gadget);