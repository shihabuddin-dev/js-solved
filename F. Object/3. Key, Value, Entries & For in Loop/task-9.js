/* 
৯. একটা building অবজেক্ট বানা, যার মধ্যে floors 10, address (street Main Road, city Dhaka), আর type Commercial এখন একটা for...in লুপ চালিয়ে সব প্রোপার্টি আর ভ্যালু প্রিন্ট কর 
*/
const building = {
    floors: 10,
    address: 'street Main Road, city Dhaka',
    type: 'Commercial'
}
for (let key in building) {
    const value = building[key];
    console.log(key, value);
}