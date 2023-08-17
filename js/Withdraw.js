


document.getElementById('btn-withdrow').addEventListener('click', function()
{
     
     const newWithDrawBalance = getInputFieldById('withdorow-input-Field');
     const previousWithDrawBalance = getTextFieldById('Withdraw-total');
     const totalWithDrawBalance = newWithDrawBalance + previousWithDrawBalance;
     setInnerText('Withdraw-total', totalWithDrawBalance);

     const previousBalanceTotal = getTextFieldById('Balance-total');
     const addAllBalance = previousBalanceTotal -  newWithDrawBalance;
     setInnerText('Balance-total', addAllBalance);
})