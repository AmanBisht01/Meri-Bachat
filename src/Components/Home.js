import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { CardMedia, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(78 70 247)",
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            margin: "20px",
            bgcolor: "rgb(255 181 65)",
            fontSize: "15px",

            color: "white",
          }}
        >
          <span
            style={{
              dipslay: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Benefit wise
          </span>
        </Avatar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: "3rem" }} />
          <Avatar
            sx={{
              width: 56,
              height: 56,
              margin: "20px",
              bgcolor: "rgb(255 181 65)",
              fontSize: "15px",

              color: "white",
            }}
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
        </div>
      </div>
      <div
        className="navbar"
        style={{
          display: "flex",
          backgroundColor: "rgb(114 105 249)",
          color: "white",
          padding: "2%",
          justifyContent: "space-evenly",
        }}
      >
        <h5>Dashboard</h5>
        <h5>Rewards Recognition</h5>
        <h5>Employee Perks</h5>
        <h5>Food card</h5>
        <h5>channal Incentivisation</h5>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <CardMedia
            component="img"
            height="400"
            image="https://img.freepik.com/free-vector/coffee-break-concept-illustration_114360-3707.jpg?t=st=1648402983~exp=1648403583~hmac=e6402d0ecc3ba5bb023addc6c4d4f313755c7560b90cd698a9a287939cd0a847&w=740"
            alt="Paella dish"
            style={{
              borderRadius: "8px",
              position: "relative",
            }}
          />
        </div>
        <div
          className="saveTax"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "rgb(114 105 249)",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", margin: "10px", fontWeight: "600" }}>
            Its time to take rest
          </h1>
          <h4 style={{ margin: "10px", fontWeight: "600" }}>
            while we are takig benefits of all your employee benifts along with
          </h4>
          <Paper
            sx={{
              color: "rgb(114 105 249)",
              width: "15rem",
              margin: "15px",
              padding: "10px",
              borderRadius: "16px",
            }}
            elevation={24}
          >
            <h2>
              {" "}
              <CheckCircleOutlineIcon color="success" />
              save Tax
            </h2>
          </Paper>
          <Paper
            sx={{
              color: "rgb(114 105 249)",
              width: "auto",
              margin: "15px",
              padding: "10px",
              borderRadius: "16px",
            }}
            elevation={24}
          >
            <h1>
              <CheckCircleOutlineIcon color="success" />
              Inventory Control
            </h1>
          </Paper>
        </div>
      </div>
      <Button
        style={{
          backgroundColor: "rgb(78 70 247)",
          color: "white",
          position: "absolute",
          left: "5%",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        overall Performance
      </Button>
      <Paper
        elevation={24}
        className="overall"
        style={{
          display: "flex",
          backgroundColor: "rgb(114, 105, 249",
          margin: "5%",
          padding: "5%",
          borderRadius: "8px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",

            color: "white",
          }}
        >
          <h4>total no of employess taken gift cards</h4>
          <h4>total value of gift cards</h4>
          <h4>how much you have saved</h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "white",
          }}
        >
          <Button
            style={{
              backgroundColor: "white",
              padding: "15% 100%",
              fontWeight: "600",
              fontSize: "1.2rem",
              borderRadius: "20px",
            }}
          >
            180
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              padding: "15% 75%",
              fontWeight: "600",
              fontSize: "1.2rem",
              borderRadius: "20px",

              width: "max-content",
            }}
          >
            $ 100,000
          </Button>
          <Button
            style={{
              backgroundColor: "rgb(59 186 116)",

              padding: "15% 100%",
              fontWeight: "600",
              fontSize: "1.2rem",
              borderRadius: "20px",
              color: "white",
              width: "max-content",
            }}
          >
            $ 20,000
          </Button>
        </div>
        <div>
          {" "}
          <CardMedia
            component="img"
            height="400"
            image="https://img.freepik.com/free-vector/coronavirus-financial-recovery-graph_23-2148554871.jpg?w=740"
            alt="Paella dish"
            style={{
              borderRadius: "8px",
              position: "relative",
            }}
          />
        </div>
      </Paper>

      <Button
        style={{
          backgroundColor: "rgb(78 70 247)",
          color: "white",
          position: "absolute",
          left: "5%",
          borderRadius: "10px",
        }}
      >
        Rewards and Recognition
      </Button>
      <Paper
        elevation={20}
        style={{
          display: "flex",
          margin: "50px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="reward">
          <CardMedia
            component="img"
            height="400"
            image="https://img.freepik.com/free-vector/character-illustration-people-holding-voucher-icons_53876-64624.jpg?w=740&t=st=1648401082~exp=1648401682~hmac=95a71b894285f2199eddba5546e9bbba1b242d9f3817d4321f39b56ebae54553"
            style={{
              borderRadius: "8px",
              height: "200px",
              width: "auto",
            }}
          ></CardMedia>
        </div>
        <div
          className="enrolled"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              border: "2px solid ",
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",
              fontSize: "1.2rem",
            }}
          >
            Currently enrolled
          </Button>
          <h3
            style={{
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",
              fontSize: "2.2rem",
              color: "rgb(78 70 247)",
            }}
          >
            156 Employees
          </h3>
        </div>
        <div
          className="atmCard"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg?t=st=1648405090~exp=1648405690~hmac=e57995443d55fbf41327905144e30546357b1d7fbe353dc972b3a3dbc68d4ba9&w=740"
            style={{
              borderRadius: "8px",
              crop: "cover",
            }}
          />
          <h6
            style={{
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",

              color: "rgb(78 70 247)",
            }}
          >
            Current Balance: $12000
          </h6>
          <Button
            style={{
              backgroundColor: "rgb(78 70 247)",
              color: "white",
              fontWeight: "600",
              padding: " 3% 10%",

              margin: "10px",
              borderRadius: "10px",
            }}
          >
            Edit
          </Button>
        </div>
      </Paper>

      <Button
        style={{
          backgroundColor: "rgb(78 70 247)",
          color: "white",
          position: "absolute",
          left: "5%",
          borderRadius: "10px",
        }}
      >
        Employee Perks
      </Button>
      <Paper
        elevation={20}
        style={{
          display: "flex",
          margin: "50px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="reward">
          <CardMedia
            component="img"
            height="400"
            image="https://img.freepik.com/free-vector/happy-millionaire-taking-bath-with-cash-rich-man-huge-heap-money-vector-illustration-financial-success-successful-businessman-wealth-concept_74855-13116.jpg?t=st=1648407184~exp=1648407784~hmac=db1a1f23dbfca05b2737f7f408d150466c815e30537bd01b084feac68d632172&w=740"
            style={{
              borderRadius: "8px",
              height: "200px",
              width: "auto",
            }}
          ></CardMedia>
        </div>
        <div
          className="enrolled"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              border: "2px solid ",
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",
              fontSize: "1.2rem",
            }}
          >
            Currently enrolled
          </Button>
          <h3
            style={{
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",
              fontSize: "2.2rem",
              color: "rgb(78 70 247)",
            }}
          >
            0 Employees
          </h3>
        </div>
        <div
          className="atmCard"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image="https://img.freepik.com/free-vector/creative-credit-card-design_48190-435.jpg?w=740"
            style={{
              borderRadius: "8px",
              crop: "cover",
            }}
          />
          <h6
            style={{
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",

              color: "rgb(78 70 247)",
            }}
          >
            Current Balance: $12000
          </h6>
          <Button
            style={{
              backgroundColor: "rgb(78 70 247)",
              color: "white",
              fontWeight: "600",
              padding: " 3% 10%",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            Edit
          </Button>
        </div>
      </Paper>

      <Button
        style={{
          backgroundColor: "rgb(78 70 247)",
          color: "white",
          position: "absolute",
          left: "5%",
          borderRadius: "10px",
        }}
      >
        Food Card{" "}
      </Button>
      <Paper
        elevation={20}
        style={{
          display: "flex",
          margin: "50px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="reward">
          <CardMedia
            component="img"
            height="400"
            image="https://img.freepik.com/free-vector/loyalty-program-concept_74855-6543.jpg?t=st=1648407184~exp=1648407784~hmac=4c60d96ae43f18eaec1f8865e0b0c6f7d40b28462e045f196e87be183fadb6e3&w=740"
            style={{
              borderRadius: "8px",
              height: "200px",
              width: "auto",
            }}
          ></CardMedia>
        </div>
        <div
          className="enrolled"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              border: "2px solid ",
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",
              fontSize: "1.2rem",
            }}
          >
            Currently enrolled
          </Button>
          <h3
            style={{
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",
              fontSize: "2.2rem",
              color: "rgb(78 70 247)",
            }}
          >
            16 Employees
          </h3>
        </div>
        <div
          className="atmCard"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg?t=st=1648405090~exp=1648405690~hmac=e57995443d55fbf41327905144e30546357b1d7fbe353dc972b3a3dbc68d4ba9&w=740"
            style={{
              borderRadius: "8px",
              crop: "cover",
            }}
          />
          <h6
            style={{
              fontWeight: "600",
              padding: "15px",
              borderRadius: "15px",

              color: "rgb(78 70 247)",
            }}
          >
            Current Balance: $12000
          </h6>
          <Button
            style={{
              backgroundColor: "rgb(78 70 247)",
              color: "white",
              fontWeight: "600",
              padding: " 3% 10%",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            Edit
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default Home;
