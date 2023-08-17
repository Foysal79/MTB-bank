


document.getElementById('btn-deposit').addEventListener('click', function()
{
     const newDepositTotal = getInputFieldById('deposit-field');
     const previousDepositTotal = getTextFieldById('deposit-total');
     const newTotal = newDepositTotal + previousDepositTotal;
     setInnerText('deposit-total', newTotal);

     const previousBalanceTotal = getTextFieldById('Balance-total');
     const addAllBalance = newDepositTotal + previousBalanceTotal;
     setInnerText('Balance-total', addAllBalance);

     
})