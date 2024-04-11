/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */

const data =['Anytown, USA', 'Metropolis', 'Near University', 'Beachfront']
const SearchProperty = () => {
    return (
        <div className="mt-10">
            <div className="flex gap-4  bg-[#bdd6d680] p-4 rounded-lg ">
                <select className="select select-bordered w-full max-w-xs font-semibold">
                    <option disabled selected >Category</option>
                    <option>Apratments</option>
                    <option>Condos</option>
                    <option>Houses</option>
                </select>
                <div>
                 <input list="data" onChange={(e) => setVal(e.target.value)} type="text" placeholder="Location" className="input input-bordered input-md w-full  max-w-xs font-semibold" />
                 <datalist id="data">
                    {data.map( (op) => <option>{op}</option>)}
                 </datalist>

                </div>
           
           
            </div>
            <div className="text-4xl text-primary font-bold font-poppins pt-12 pb-6">Our choice of <br /> popular real estate</div>
        </div>
    );
};

export default SearchProperty;