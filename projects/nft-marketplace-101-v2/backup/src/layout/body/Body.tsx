type BodyProps = { children: React.ReactNode; }

export default function Body({ children }: BodyProps) {

  return (
    <div className='antialiased bg-base-200 text-base-content'>
      {children}
    </div>
  );

}
