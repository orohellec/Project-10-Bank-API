import '@/app/_css/FeatureItem.css'

export default function ({ data }) {
  return (
    <div className="feature-item">
      <img
        src={data.src}
        alt="Chat Icon"
        className="feature-icon"
      />
      <h3 className="feature-item-title">{data.title}</h3>
      <p>
        {data.text}
      </p>
    </div>
  )
}

