import myBg from '../assets/video/bg.mp4';

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed object-cover w-full h-full -z-10 brightness-105"
    >
      <source src={myBg} type="video/mp4" />
    </video>
  );
}
