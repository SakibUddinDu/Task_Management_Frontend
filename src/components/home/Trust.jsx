import imgTrust from '../../assets/image/imgTrust.webp'
function Trust() {
  return (
    <section className='container p-6'>
      <h2 className='flex text-4xl flex-col mb-6 text-center'>Trusted by over 15,000,000 teams worldwide</h2>
      <img src={imgTrust} alt="" />
    </section>
  );
}

export default Trust;
