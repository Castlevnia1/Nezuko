module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/XikoNQDfaqcAAAPo/bunny-nezuko-bunny-ears.mp4',
                   'https://media.tenor.com/xBh07rz9GHYAAAPo/nezuko-kamado-nezuko.mp4',
                   'https://media.tenor.com/CMHP0DIQY4UAAAPo/demon-slayer-kimetsu-no-yaiba.mp4',
                   'https://media.tenor.com/68c6pxzq3RAAAAPo/nezuko-nezuko-kamado.mp4',
                   'https://media.tenor.com/JQgNUfM_xcwAAAPo/nezuko-kamado-run.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const logogg = "https://i.ibb.co/t3Jd1wK/-6.png"
        
                         
const lemo = `
*━『 Support Group Links 』━*

*1) [ 🌾🍃𝙳𝚊𝚗𝚍𝚎𝚕𝚒𝚘𝚗𝚜🍃🌾 ] :*
https://chat.whatsapp.com/KLVwGTVcTkh0mIvtjIKCTb
`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:logogg},caption:lemo},{quoted:m})  
    }
}
