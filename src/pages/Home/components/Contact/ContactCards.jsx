import ContactCardItems from "./ContactCardItems"

const ContactCards = () => {
  const contactInfo = [
    { icon: "./images/Contact/phone-icon.svg", iconAlt: "phone icon", question: "Still have questions?", color: "call-color" },
    { icon: "./images/Contact/chat-icon.svg", iconAlt: "chat icon", question: "Don't like phone calls?", color: "chat-color" }
  ]

  return (
    <div className="contact-cards pt-2">

      {
        contactInfo.map((info, index) => (
          <ContactCardItems
            key={index}
            icon={info.icon}
            iconAlt={info.iconAlt}
            question={info.question}
            color={info.color} /> ))
      }

    </div>
  )
}

export default ContactCards