export function ChangeOwner(props) {
     return (
          <>
               <div className="title"> Change Owner</div>
               <div className="field column is-two-thirds mx-auto">
                    <div className="control">
                         <input
                              className="input w-50"
                              type="text"
                              placeholder="Other owner Address e.g. 0x8392d8f9c8f9c8f9c8f9c8f9c8f9c8f9c8f9c8f"
                              required
                              value={props.contract.owner}
                         />
                    </div>
               </div>
               <div className="title">
                    <button className="button"> Change</button>
               </div>
          </>
     );
}
