import React, {useEffect, useState} from "react"
import axios from "axios"


export default function ComingSoon() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get('/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=C742F570D1B611EC9843A7484A9A17C36E95324539A84AED9B90C5C8F5F7C8DF&optimus_risk_level=71&optimus_code=10').then(resp => {
            if (resp.data.coming) {
                setList(resp.data.coming)
            }
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {
                list.length ? list.map(item => <div key={item.id} style={{textAlign: 'center', fontWeight: 'bold'}}>
                    {item.nm}
                </div>) : <div style={{textAlign: 'center', fontWeight: 'bold'}}>空空如也</div>
            }
        </div>
    )
}