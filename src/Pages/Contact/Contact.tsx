import "./Contact.css"

// interface ContactInfo {
//     contactBlurb: string;
// }

export default function Contact() {
    return (
        <div className="contact-page link-underline inset-border bg-gradient">
            <div className="contact-blurb fade-in">
                <div className="contact-text">
                    <h2 className="contact-header">How to Contact Me</h2>
                    <h3>Feel free to reach out to me with any inquiries at the following:</h3>
                    <div className='contact-info'>
                        <p>Check Out My Resume: <a href="https://docs.google.com/document/d/1L51oQwJK6h2nFfVH4JbomAKZ7ezcoW7V/edit?usp=sharing&ouid=101345781807643657466&rtpof=true&sd=true">Here</a></p>
                        <p>Email me: <a href="mailto:david.shaw1242@gmail.com">david.shaw1242@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
