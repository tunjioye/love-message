import React from 'react'
import styles from '../src/style/loveMessage.module.scss'
import clsx from 'clsx'
import { loveMessage } from '@/utils/loveMessage'

const TEXTAREA_ROWS = 7

function LoveMessage() {
  const [action, setAction] = React.useState<'encrypt' | 'decrypt'>('encrypt')
  const [message, setMessage] = React.useState<string>('')
  const [encryptedMessage, setEncryptedMessage] = React.useState<string>('')
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (action === 'decrypt') {
      setEncryptedMessage(e.target.value)
      return
    }
    setMessage(e.target.value)
  }

  const encryptMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const encryptedMessage = loveMessage.encrypt(message)
    setEncryptedMessage(encryptedMessage)
  }
  const decryptMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const decryptedMessage = loveMessage.decrypt(encryptedMessage)
    setMessage(decryptedMessage)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (action === 'encrypt') {
      encryptMessage(e)
      return
    }
    decryptMessage(e)
  }

  const disableButton = action === 'encrypt' ? message.length === 0 : encryptedMessage.length === 0
  const inputFormTitle = action === 'encrypt' ? 'Love Message' : 'Encrypted Love Message'
  const outputFormTitle = action === 'encrypt' ? 'Encrypted Love Message' : 'Love Message'
  const inputMessage = action === 'encrypt' ? message : encryptedMessage
  const outputMessage = action === 'encrypt' ? encryptedMessage : message
  const inputPlaceholder = action === 'encrypt' ? 'Enter message' : 'Enter encrypted message'
  const outputPlaceholder = action === 'encrypt' ? 'Encrypted message' : 'Decrypted message'

  const switchAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (action === 'encrypt') {
      setAction('decrypt')
      return
    }
    setAction('encrypt')
  }

  return (
    <div className={clsx(styles.loveMessage)}>
      {/* input love message */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h4 className={styles.heading}>{inputFormTitle}</h4>
          <button
            className={styles.reset}
            onClick={() => {
              setMessage('')
              setEncryptedMessage('')
              setAction('encrypt')
            }}
          >
            Reset
          </button>
        </div>
        <form onSubmit={onSubmit} className={styles.loveMessageForm}>
          <textarea
            placeholder={inputPlaceholder}
            value={inputMessage}
            onChange={handleInputChange}
            required
            rows={TEXTAREA_ROWS}
          />

          <div className={styles.loveMessageButtons}>
            <button
              type="submit"
              className={clsx(styles.loveMessageButton, { secondary: action === 'decrypt' })}
              disabled={disableButton}
            >
              {action === 'encrypt' ? 'Encrypt' : 'Decrypt'} Love Message
            </button>
            <button
              type="button"
              onClick={switchAction}
              className={clsx(styles.loveMessageButton, { secondary: action === 'encrypt' })}
            >
              Switch Action
            </button>
          </div>
        </form>
      </div>

      {/* output love message */}
      <div>
        <h4 className={styles.heading}>{outputFormTitle}</h4>
        <form onSubmit={() => null} className={clsx(styles.loveMessageForm, styles.noMargin)}>
          <textarea
            placeholder={outputPlaceholder}
            value={outputMessage}
            rows={TEXTAREA_ROWS}
            readOnly
          />
        </form>
      </div>
    </div>
  )
}

export default LoveMessage
