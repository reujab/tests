import * as React from "react"
import Answer from "../Answer"
import Checkbox from "../Checkbox"
import IMG from "../IMG"
import Input from "../Input"
import Radio from "../Radio"

export default [
	<Radio
		question="Which of the following are all video ports?"
		answers={[
			<Answer correct>VGA, S-Video, DVI, HDMI, DisplayPort, Thunderbolt</Answer>,
			<Answer>VGA, S-Video, DVI, HDMI, DisplayPort, TRS</Answer>,
			<Answer>VGA, S-Video, DVI, HDMI, DisplayPort, BNC</Answer>,
		]}
		explanation={
			<React.Fragment>
				<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SVGA_port.jpg/300px-SVGA_port.jpg">VGA</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/S-Video_7-pin_quasi-DIN_connector.JPG/170px-S-Video_7-pin_quasi-DIN_connector.JPG">S-Video</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/3/37/Dvi-cable.jpg">DVI</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Adapter_dvi_hdmi_S7302224_wp.jpg/220px-Adapter_dvi_hdmi_S7302224_wp.jpg">HDMI</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Displayport-cable.jpg">DisplayPort</IMG>, and <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Thunderbolt_3_interface_USB-C_ports.jpg/220px-Thunderbolt_3_interface_USB-C_ports.jpg">Thunderbolt</IMG> are all video ports. <IMG src="https://cdn.head-fi.org/a/2446444.jpg">TRS</IMG> transmits audio, and <IMG src="https://upload.wikimedia.org/wikipedia/commons/b/b9/BNC_connector_50_ohm_male.jpg">BNC</IMG> is a connector used for coaxial cables.
			</React.Fragment>
		}
	/>,

	<Checkbox
		question="Which of the following would you most likely find a SO-DIMM in?"
		answers={[
			<Answer correct>laptop</Answer>,
			<Answer correct>all-in-one desktop</Answer>,
			<Answer>smart phone</Answer>,
			<Answer>printer</Answer>,
			<Answer>desktop computer</Answer>,
		]}
		explanation={
			<React.Fragment>
				<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Samsung-1GB-DDR2-Laptop-RAM.jpg/1200px-Samsung-1GB-DDR2-Laptop-RAM.jpg">SO-DIMM memory modules</IMG> are most likely to be found in laptops and compact all-in-one desktops.
			</React.Fragment>
		}
	/>,

	<Input
		question="A system administrator needs remote access to a Linux server. What port must be open?"
		answer={22}
		explanation="SSH (port 22) adds the capability for remote access to a Linux machine. RDP (port 3389) is only used by Windows."
	/>,

	<Checkbox
		question="Which of the following wireless protocols require a line-of-sight clearance?"
		answers={[
			<Answer correct>satellite</Answer>,
			<Answer correct>infared</Answer>,
			<Answer>802.11</Answer>,
			<Answer>Bluetooth</Answer>,
			<Answer>NFC</Answer>,
		]}
		explanation="There can be no obstruction between satellites or between an infared transmitter and receiver."
	/>,

	<Checkbox ordered
		question="Which of the following RAID arrays provide fault tolerance?"
		answers={[
			<Answer>RAID 0</Answer>,
			<Answer correct>RAID 1</Answer>,
			<Answer correct>RAID 5</Answer>,
			<Answer correct>RAID 6</Answer>,
			<Answer correct>RAID 10</Answer>,
		]}
		explanation="RAID 0 is striping, RAID 1 is mirroring, RAID 5 is striping and parity, RAID 6 is striping and dual parity, and RAID 10 is striping and mirroring."
	/>,

	<Radio
		question="When you boot up a computer and hear a single beep, but the screen is blank, what can you assume is the source of the problem?"
		answers={[
			<Answer correct>monitor</Answer>,
			<Answer>memory</Answer>,
			<Answer>CPU</Answer>,
			<Answer>keyboard</Answer>,
		]}
		explanation="POST sounds either no beep or one beep when there is no boot error, so if POST sounds one beep with no display, the issue is with the monitor."
	/>,

	<Checkbox
		question="Which of the following devices are most likely to use ECC memory?"
		answers={[
			<Answer correct>server</Answer>,
			<Answer>laptop</Answer>,
			<Answer>desktop</Answer>,
			<Answer>smart phone</Answer>,
			<Answer>printer</Answer>,
		]}
		explanation="ECC (error-correcting code) memory can automatically correct one bit in a failing RAM stick. Because ECC memory costs more and doesn't provide much of a benefit, most computer users don't use ECC memory. A server would most benefit from ECC memory."
	/>,

	<Radio ordered
		question="Which of the following DIMMs uses the least voltage?"
		answers={[
			<Answer>DDR</Answer>,
			<Answer>DDR2</Answer>,
			<Answer>DDR3</Answer>,
			<Answer correct>DDR4</Answer>,
		]}
		explanation="DDR uses 2.5 V, DDR2 uses 1.8 V, DDR3 uses 1.5 V, and DDR4 uses 1.2 V."
	/>,

	<Radio
		question="When you turn off the power to a computer and unplug it at night, it loses the date, and you just reenter it each morning. What is the problem?"
		answers={[
			<Answer correct>The CMOS battery is dead.</Answer>,
			<Answer>The motherboard is failing.</Answer>,
			<Answer>The RAM is losing power when the system is powered off.</Answer>,
			<Answer>The failing CPU is resetting the date on every boot.</Answer>,
		]}
		explanation={
			<React.Fragment>
				The <IMG src="https://www.cpureport.com/wp-content/uploads/2014/12/CMOS-battery1.jpg">CMOS battery</IMG> powers the CMOS, which stores the date when the computer is powered off. If there is no power to the computer and the CMOS battery is dead, the date and time will be lost. Memory (RAM) is lost after the machine is powered off, but that is not the underlying issue.
			</React.Fragment>
		}
	/>,

	<Checkbox
		question="In which of the following scenarios should you flash (update) your firmware (BIOS/UEFI)?"
		answers={[
			<Answer correct>You need new features that are not available on your current firmware version.</Answer>,
			<Answer correct>You are experiencing issues and suspect that it's a firmware issue.</Answer>,
			<Answer>There is a new version available on the manufacturer's website.</Answer>,
			<Answer>Your firmware chip failed.</Answer>,
		]}
		explanation="You should only update your firmware if you have to because your computer could fail to boot after. If your firmware chip fails, you must replace your motherboard."
	/>,
]
