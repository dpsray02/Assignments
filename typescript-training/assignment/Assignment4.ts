let transactions : number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];

let totalNumberOfcredit:number = 0;

let totalNumberOfDebit:number = 0;

let totalCreditAmount:number = 0;

let totalDebitAmount:number = 0;

let totalBalance:number = 0;

let suspiciousTransactionsCount:number=0;

for (let transaction of transactions){
    if(transaction>0){
        totalNumberOfcredit++;
        totalCreditAmount+=transaction;
        if (transaction>10000){
            suspiciousTransactionsCount++;
            console.log(`Suspicious Transaction: ${transaction}`);
        }
    } else if(transaction<0){
        totalNumberOfDebit++;
        totalDebitAmount+=transaction;
        if (transaction<-10000){
            suspiciousTransactionsCount++;
            console.log(`Suspicious Transaction: ${transaction}`);
        }
    }
}
        let remainbingAmount : number = totalCreditAmount + totalDebitAmount;

       console.log(`Remaining Amount: ${remainbingAmount}`)

        console.log(`Total Number of Credit Transactions: ${totalNumberOfcredit}`);

        console.log(`Total Number of Debit Transactions: ${totalNumberOfDebit}`);

        console.log(`Total Credit Amount: ${totalCreditAmount}`);

        console.log(`Total Debit Amount: ${totalDebitAmount}`);
        
        console.log(`Total Suspicious Transactions: ${suspiciousTransactionsCount}`);