import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
    const {transactions} = useTransactions();

    const summaryTotal = transactions.reduce((soma,transaction)=>{
        if(transaction.type === 'deposit'){
            soma.deposits += transaction.amount;
            soma.total += transaction.amount;
            console.log(transaction.amount);

        }else{
            soma.withdraws += transaction.amount;
            soma.total -= transaction.amount;

        }

        return soma;

    },{
        deposits:0,
        withdraws:0,
        total:0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency:'BRL'
                    }).format(summaryTotal.deposits)}
                    </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>
                    - {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency:'BRL'
                    }).format(summaryTotal.withdraws)}
                </strong>
            </div>
            <div className="highlighted-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency:'BRL'
                    }).format(summaryTotal.total)}
                </strong>
            </div>
        </Container>
    )
}