import classes from "./Header.module.css";
import logo from "../../../public/pixel.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.clogos}>
					<img className={classes.logo} src={logo} alt="logo" />
				</div>

				<div className={classes.contact}>
					<div className={classes.mobile}>
						<p className={classes.icon}>
							<PhoneAndroidIcon />
						</p>
					</div>
					<div className={classes.border1}>
						<p className={classes.numbers}>+389 76 446 196</p>
					</div>
					<div className={classes.border2}>
						<p className={classes.numbers}>+389 76 488 991</p>
					</div>
					<div className={classes.border3}>
						<p className={classes.numbers}>+389 72 249 307</p>
					</div>
				</div>

				<div className={classes.eMail}>
					<div className={classes.daco}>
						<div className={classes.piksel}>
							<p className={classes.mailIcon}>
								<EmailIcon />
							</p>
						</div>
						<div className={classes.mail}>
							<p className={classes.text}>pikselcopy@gmail.com</p>
						</div>
					</div>
					<div className={classes.daco}>
						<div className={classes.piksel}>
							<p className={classes.mailIcon}>
								<LocationOnIcon/>
							</p>
						</div>
						<a
							className={classes.address}
							href="https://www.google.com/maps/place/Piksel+Fotokopir/@41.9852307,21.4657293,15z/data=!4m6!3m5!1s0x135415b7436980dd:0xc9dc91dba44e5839!8m2!3d41.9852307!4d21.4657293!16s%2Fg%2F11vplshtvc?entry=ttu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className={classes.location}>
								Boulevard Jane Sandanski 82 Л.30, Skopje 1000
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
