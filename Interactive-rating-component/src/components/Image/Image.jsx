const Image = ({ width = 'auto', height = 'auto', src, className = '' }) => {
  return (
    <img width={width} height={height} src={src} className={className} />
  )
}

export default Image;