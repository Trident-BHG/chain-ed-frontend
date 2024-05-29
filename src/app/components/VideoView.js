export default function VideoView({ src }) {
  return <iframe className="h-full w-full" src={src} allowFullScreen></iframe>;
}
