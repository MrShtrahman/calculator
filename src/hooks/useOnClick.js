import { useEventHandler } from './useEventHandler'

export const useOnClick = () => {
    const {handleNumberClicked, handleOperatorClicked, 
        handleEqualClicked, handleClearClicked, handleMemoryClicked} = useEventHandler();

    const clickHandler = value =>  {
        if(!isNaN(value)) {
            handleNumberClicked(value)
        } else {
            switch(value) {
                case 'C':
                    handleClearClicked()
                    break
                case '+':
                case '-':
                case '*':
                case '/':
                    handleOperatorClicked(value)
                    break
                case '=':
                    handleEqualClicked()
                    break
                case 'M+':
                case 'M-':
                case 'MR':
                case 'MC':
                    handleMemoryClicked(value)
                    break
                default: return
            }
        }
    }

    return clickHandler
}