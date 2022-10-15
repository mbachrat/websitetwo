import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';

export default function ContactForm() {
  return (
    <form id='contact-form' action="https://submit-form.com/OVnmKdOt" >
        <input type="text" name='name' placeholder='Name' autoComplete="name" required />
        <input type="email" name='email' placeholder='Email' autoComplete="email" required />
        <textarea wrap="off" name='message' type='text' required placeholder='Message' rows="10" cols="50"></textarea>
        <Button type="submit" id="button" variant="contained" endIcon={<Send />}>
        Send
        </Button>
    </form>
  )
}

