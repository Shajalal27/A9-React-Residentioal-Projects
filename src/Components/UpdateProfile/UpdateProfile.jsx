

const UpdateProfile = () => {
   

    return (
        <div className=" mx-auto w-full md:w-1/2 shadow-2xl bg-base-100 mb-8 mt-6">
            <h2 className="text-3xl font-bold font-poppins text-center">Update Your Profile</h2>
                <form  className="card-body w-full">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Display Name</span> {/* Changed 'Email' to 'Display Name' */}
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="name"
                            className="input input-bordered"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input
                            type="text"  
                            placeholder="Photo URL"
                            className="input input-bordered"
                        />
                    </div>

                    <div className="form-control relative mb-4">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
        </div>
    );
};

export default UpdateProfile;







// import  { useState } from 'react';
// import { firestore } from '/firebase';
// import useAuth from '../../Hook/useAuth';

// const UpdateProfile = () => {
//     const [user] = useAuth();
//     const [displayName, setDisplayName] = useState(user? user.displayName: '');

//    const handleProfileUpdate = async (e) =>{
//     e.preventDefault();
//     if(!user) return;
//     try{
//         await user.UpdateProfile({
//             displayName: displayName.trim(),  
//         });

//       await firestore.collection('users').doc(user.uid).set({
//         displayName: displayName.trim(), 
//       },{merge:true});
//       alert('Profile Update successfully');
//     }
//     catch(error){
//         alert(error.message);
//     }
//    };

//     return (
//     <div className=" mx-auto w-full md:w-1/2 shadow-2xl bg-base-100 mb-8 mt-6">
//         <h2 className="text-3xl font-bold font-poppins text-center">Update Your Profile </h2>
        
//         { user?
//             (<form onSubmit={handleProfileUpdate}  className="card-body w-full">
            
//             <div className="form-control">
//                 Display Name:
//             <label className="label">
//                 <span className="label-text">Email</span>
//             </label>
//             <input type="text"
//             value={displayName}
//             onChange={(e)=>setDisplayName(e.target.value)}
//             required
//             placeholder="name" 
//             className="input input-bordered" 
//             />
            
//             </div>
//             <div className="form-control">
//             <label className="label">
//                 <span className="label-text">Photo Url</span>
//             </label>
//             <input type="photo" placeholder="Photo URL" className="input input-bordered"  
//             />
//             </div>
//             <div className="form-control relative mb-4">
//             <label className="label">
//                 <span className="label-text">Password</span>
//             </label>
//             <input type="password" 
           
//             placeholder="password" 
//             className="input input-bordered" />
           
//             </div>
//             <div className="form-control relative mb-4">
//             <label className="label">
//                 <span className="label-text">Password</span>
//             </label>
//             <input type="password" 
           
//             placeholder="password" 
//             className="input input-bordered" />
           
//             </div>
//             <div className="form-control relative mb-4">
//             <label className="label">
//                 <span className="label-text">Password Confirmation</span>
//             </label>
//             <input type= "password"
            
//             placeholder="password" 
//             className="input input-bordered"/>     
//             </div>
//             <div className="form-control mt-6">
//                 <button type="submit"  className="btn btn-primary">Update</button>
              
//             </div>
//             </form>)
//             :
//             (
//                 <div>Please sign in to update your profile</div>
//             )
//         }
//     </div>
//     );
// };

// export default UpdateProfile;