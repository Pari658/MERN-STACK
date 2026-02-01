const Footer  = ({length}) => {
  const today = new Date();
  return (
    
    <footer>
      <p>Copyright &copy; {today.getFullYear()} count : {length}</p>
    </footer>

  )
}
export default Footer;