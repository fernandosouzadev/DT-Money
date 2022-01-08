import Modal from 'react-modal';
import { Container,RadioButton,TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    const {createTransaction} = useTransactions();
    const [type,setType] = useState('deposit');
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');
    const [amount,setAmount] = useState(0);

    async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();

    }

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar Modal de cadastro de Transação" />

        </button>
        <Container onSubmit={handleCreateNewTransaction}>

            <h2>Cadastrar Transação</h2>

            <input 
            placeholder="Titulo"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />

            <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioButton
                type="button"
                isActive={type === 'deposit'}
                activeColor={'green'}
                onClick={()=>{setType('deposit')}}
                >
                    <img src={incomeImg} alt="Cadastrar Entrada" />
                    <span>Entrada</span>
                </RadioButton>

                <RadioButton
                type="button"
                isActive={type === 'withdraw'}
                activeColor={'red'}
                onClick={()=>{setType('withdraw')}}
                >
                    <img src={outcomeImg} alt="Cadastrar Saida" />
                    <span>Saida</span>
                </RadioButton>

            </TransactionTypeContainer>

            <input
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>     

        </Container>
        </Modal>
    )
}