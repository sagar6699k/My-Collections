import './dropdown.css';

export const Dropdown = () => {
  return (
    <div className="dropdown_menu">
          Profile
          <ul className="dropdown">
              <li>Contact</li>
              <li>Message</li>
              <li>Documents</li>
              <li>Mails</li>
              <li>Resources</li>
          </ul>
    </div>
  )
}
