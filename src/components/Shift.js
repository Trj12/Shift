import React from 'react'
const Shift = (props) => {
    return ( <div style={{ maxHeight: '700px',
        overflowY: 'scroll'}} >
        {
            props.Schedule?props.Schedule.map((data,key)=>{
                return(
                    <div key={key} className='container example-two' style={{padding:'2px'}}>

                            <header className='example-two-header'>
                                <span className='logo' style={{background:'wheat'}}>
                                {data.shift} {data.start} to {data.end} <img src="https://img.icons8.com/office/30/000000/marker.png" alt="" />{data.location}
                                        </span>
                                <nav className='vertical-align-middle scroll'>
                                {data.memberlist.length>0?data.memberlist.map((member,index)=>{
                                    return(
                                        <span key={index} className='nav-item' style={{display: 'inline-grid'}}>
                                        <img 
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASbSURBVFhH7ZhbTBxlFMdJ9NVrTdTYxqSxib5omtImWkyUF1uqUYrX2MKTtklt0qSCtMYHhULSRmMprZeIFYQHNerWKpdSZbWLGpRLtrCKs8tlu/fSXXZnWFwgOZ7z7cc6zJzdTBfaJ/7JL0y+Ped//pnZ+XaGglWtKoem/pm6OejRnvS7tTf8inYqoGhtBB3TWtCt7aAaWX59BD1wo8+tvohBuv2KuhBwa5ALv1udD7jVLp+ivkC90ubaKKioz+HAMS6IFfCsugOeRJm0Wzn5XPE1eBbOcEPzAb8CX4+Px26V9suTV5m+D8+ahxu0HOhskrcck59EOEULcQNWAvLOO6TXO307mihGU46o3w/JqAtSiQGYU9NEJqfYWgYlr8uN3zkbY7aE0FgMQw0CpBwmUvFBmLoUZvtMKOo3cqw10d3KGukIjcdhYaaPDafn37gTgmMJ1mMpiZ1yfG7RXmXlpkjGhtlAHFTLeRhQLO2TGO4lpnkJkYkrbBDB7M8AgRYAVy1AsiezTj2clx68cs/LGNlFuz7XrCcR9hhC2QH8nwEMVgOcfxag46k0v7+WDow18dAE66UHT06HjMEr6oneYuXnawbvWBHsUhPAQBVAd9n/oYz8eVDUaldGWS89GHD+8l+Xb5JxzKIfd67RSDI2kg7IBeLAWtqGOC+G7TKOWfQEwjSY0MLOTMC5szug79jD4u9iINManUHs4byM4EmqlHHMwoAnuSYjMz+8AjBxSgz3ni6G6ifuFn8XA5rWsJZ6OC8jmKFRxjFLPM8xTUZivc0A3z2eCZS0lWSO2TWspR7Oy4Sitco4ZlkNSMxewG1EFygXSUcd68GSK6DVS0xEh35kw3BEh35iPbJwQsYxy+pNIlBUSNlxC2EC6UnZq7BeNfdnIedNggUlxoZchEYDsHCunA1GzJ+rEDVcb1YUbZuMYxa94FjZqPXELnwC0HYvgK0IoB1vjPbteLxVrMUcTWxPNnCjnsu5UZPwcnRyzdkIdR4H+LCAJdTVwPZkA09Ou4yRXfT2xTUbcdh88MyWVthbhL+/TDhiT9EhKN3cBr9+72c9jNBjnoyRXenHLXz7YgyIiZEENL7eD3se6YDiDU2wad1xCB+70xQufPQu8Vnxhk9F7cnKfpgcibOeAkUbBYAbZIzcoodHzoQG1OzuFQOJlwu/hY1rG2D3lsPgq1+XCUfHuwrfFJ/tKrRl6mvKe8Hr4kP6lZmn5Xhrosdwo8kHVQOZYYvsfPAL2LT2BGy8pwFKHjgioGNaK3voS1P9R4eHlngSeMW+kmOta3Jy+jZszrw0Ddkj+H3rNA0kKjafgW33t8Cj6z8W0HE5rnG15OH8JaIPqNBjnhx7ddK/dp5+x8kOzAfyIk+8a4Mr826MN43+u7dcaisc4syFRmfXyzHLE723vruvb3zvVn7g1UAe7+3vG1uxf33o1VJ38e3qUnuKG2yFQ6U9qeba4bek3bVRD+6TLXXOIzUVjsi+x7rYIHqoBi9puLV+uJZ6pc31UU/b33d8Xn+xsvFg/9n3D/wxePTV3zwEHdMafdbd7Fojy1e1KrMKCv4DssAP/Xecz28AAAAASUVORK5CYII=" alt="Avatar" className="avatar" />
                                        <span>{member.name}</span>
                                        </span>
                                    )
                                }):''}
                                </nav>
                            </header>
                    </div>)
                  }):""
                   }
            </div> );
}
 
export default Shift;