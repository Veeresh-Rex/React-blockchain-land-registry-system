export default function Card(props) {
     return (
          <>
               <div class="box">
                    <div class="field image is-5by4">
                         <img src={props.src} aria-hidden alt="Placeholder image" />
                    </div>
                    <div className="field is-captalize is-size-4 has-text-weight-bold columns is-centered mt-1 ">
                         {props.name}
                    </div>
                    <div class="field columns is-centered mt-1 mb-1">
                         <button class="button is-primary is-outlined">
                              Continue
                         </button>
                    </div>
               </div>
          </>
     );
}
