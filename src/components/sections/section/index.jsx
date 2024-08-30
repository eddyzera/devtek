/* eslint-disable react/prop-types */
import './index.css'
export const Section = ({ sectionRef, bgUrl, title, description }) => {
  return (
    <section ref={sectionRef} className="section-element" style={{ backgroundImage: `url(${bgUrl})` }}>
      <div className="section-wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}