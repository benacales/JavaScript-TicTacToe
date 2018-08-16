// Check to see if I can win

function myMove() {

var box1 = players[0];
var box2 = players[1];
var box3 = players[2];
var box4 = players[3];
var box5 = players[4];
var box6 = players[5];
var box7 = players[6];
var box8 = players[7];
var box9 = players[8];

    if ((box1 === 2) && (box2 === 2) && (box3 === 0)) {
        box3 = 2;
        }
    else if ((box4 === 2) && (box5 === 2) && (box6 === 0)) {
        box6 = 2;
        }
    else if ((box7 === 2) && (box8 === 2) && (box9 === 0)) {
        box9 = 2;
        }
    else if ((box1 === 2) && (box4 === 2) && (box7 === 0)) {
        box7 = 2;
        }
    else if ((box2 === 2) && (box5 === 2) && (box8 === 0)) {
        box8 = 2;
        }
    else if ((box3 === 2) && (box6 === 2) && (box9 === 0)) {
        box9 = 2;
        }
    else if ((box1 === 2) && (box5 === 2) && (box9 === 0)) {
        box9 = 2;
        }
    else if ((box3 === 2) && (box5 === 2) && (box7 === 0)) {
        box7 = 2;
        }
    else if ((box1 === 2) && (box2 === 0) && (box3 === 2)) {
        box2 = 2;
        }
    else if ((box4 === 2) && (box5 === 0) && (box6 === 2)) {
        box5 = 2;
        }
    else if ((box7 === 2) && (box8 === 0) && (box9 === 2)) {
        box8 = 2;
        }
    else if ((box1 === 2) && (box4 === 0) && (box7 === 2)) {
        box4 = 2;
        }
    else if ((box2 === 2) && (box5 === 0) && (box8 === 2)) {
        box5 = 2;
        }
    else if ((box3 === 2) && (box6 === 0) && (box9 === 2)) {
        box6 = 2;
        }
    else if ((box1 === 2) && (box5 === 0) && (box9 === 2)) {
        box5 = 2;
        }
    else if ((box3 === 2) && (box5 === 0) && (box7 === 2)) {
        box5 = 2;
        }
    else if ((box1 === 0) && (box2 === 2) && (box3 === 2)) {
        box1 = 2;
        }
    else if ((box4 === 0) && (box5 === 2) && (box6 === 2)) {
        box4 = 2;
        }
    else if ((box7 === 0) && (box8 === 2) && (box9 === 2)) {
        box7 = 2;
        }
    else if ((box1 === 0) && (box4 === 2) && (box7 === 2)) {
        box1 = 2;
        }
    else if ((box2 === 0) && (box5 === 2) && (box8 === 2)) {
        box2 = 2;
        }
    else if ((box3 === 0) && (box6 === 2) && (box9 === 2)) {
        box3 = 2;
        }
    else if ((box1 === 0) && (box5 === 2) && (box9 === 2)) {
        box1 = 2;
        }
    else if ((box3 === 0) && (box5 === 2) && (box7 === 2)) {
        box3 = 2;
        }
    else {
        // Check to see if my opponent is about to win
        if ((box1 === 1) && (box2 === 1) && (box3 === 0)) {
            box3 = 2;
            }
        else if ((box4 === 1) && (box5 === 1) && (box6 === 0)) {
            box6 = 2;
            }
        else if ((box7 === 1) && (box8 === 1) && (box9 === 0)) {
            box9 = 2;
            }
        else if ((box1 === 1) && (box4 === 1) && (box7 === 0)) {
            box7 = 2;
            }
        else if ((box2 === 1) && (box5 === 1) && (box8 === 0)) {
            box8 = 2;
            }
        else if ((box3 === 1) && (box6 === 1) && (box9 === 0)) {
            box9 = 2;
            }
        else if ((box1 === 1) && (box5 === 1) && (box9 === 0)) {
            box9 = 2;
            }
        else if ((box3 === 1) && (box5 === 1) && (box7 === 0)) {
            box7 = 2;
            }
        else if ((box1 === 1) && (box2 === 0) && (box3 === 1)) {
            box2 = 2;
            }
        else if ((box4 === 1) && (box5 === 0) && (box6 === 1)) {
            box5 = 2;
            }
        else if ((box7 === 1) && (box8 === 0) && (box9 === 1)) {
            box8 = 2;
            }
        else if ((box1 === 1) && (box4 === 0) && (box7 === 1)) {
            box4 = 2;
            }
        else if ((box2 === 1) && (box5 === 0) && (box8 === 1)) {
            box5 = 2;
            }
        else if ((box3 === 1) && (box6 === 0) && (box9 === 1)) {
            box6 = 2;
            }
        else if ((box1 === 1) && (box5 === 0) && (box9 === 1)) {
            box5 = 2;
            }
        else if ((box3 === 1) && (box5 === 0) && (box7 === 1)) {
            box5 = 2;
            }
        else if ((box1 === 0) && (box2 === 1) && (box3 === 1)) {
            box1 = 2;
            }
        else if ((box4 === 0) && (box5 === 1) && (box6 === 1)) {
            box4 = 2;
            }
        else if ((box7 === 0) && (box8 === 1) && (box9 === 1)) {
            box7 = 2;
            }
        else if ((box1 === 0) && (box4 === 1) && (box7 === 1)) {
            box1 = 2;
            }
        else if ((box2 === 0) && (box5 === 1) && (box8 === 1)) {
            box2 = 2;
            }
        else if ((box3 === 0) && (box6 === 1) && (box9 === 1)) {
            box3 = 2;
            }
        else if ((box1 === 0) && (box5 === 1) && (box9 === 1)) {
            box1 = 2;
            }
        else if ((box3 === 0) && (box5 === 1) && (box7 === 1)) {
            box3 = 2;
            }
        else {
            // if ((box1 === 1) && (box2 === 0) && (box3 === 0) && (box4 === 0) && (box5 === 0) && (box6 === 0) && (box7 === 0) && (box8 === 0) && (box9 === 0)) {
            //     box5 = 2;
            // }
            // else if ((box1 === 0) && (box2 === 0) && (box3 === 0) && (box4 === 0) && (box5 === 0) && (box6 === 0) && (box7 === 0) && (box8 === 0) && (box9 === 1)) {
            //     box5 = 2;
            // }            
            // else if ((box1 === 0) && (box2 === 0) && (box3 === 0) && (box4 === 0) && (box5 === 0) && (box6 === 0) && (box7 === 1) && (box8 === 0) && (box9 === 0)) {
            //     box5 = 2;
            // }
            // else if ((box1 === 0) && (box2 === 0) && (box3 === 1) && (box4 === 0) && (box5 === 0) && (box6 === 0) && (box7 === 0) && (box8 === 0) && (box9 === 0)) {
            //     box5 = 2;
            // }
            // else {            
                // Mr.Staggs Fix
                if ((box1 === 1) && (box9 === 0)) {
                    box9 = 2
                }
                else if ((box9 === 1) && (box1 === 0)) {
                    box1 = 2
                }
                else if ((box3 === 1) && (box7 === 0)) {
                    box7 = 2
                }
                else if ((box7 === 1) && (box3 ===0)) {
                    box3 = 2
                }
                else {
                    if (box5 === 0) {
                        box5 = 2;
                    }
                    else if ((box5 === 2) && (box1 == 1) && (box9 === 0)) {
                        box9 = 2;
                    }
                    else if ((box5 === 2) && (box9 == 1) && (box1 === 0)) {
                        box1 = 2;
                    }
                    else if ((box5 === 2) && (box3 == 1) && (box7 === 0)) {
                        box7 = 2;
                    }
                    else if ((box5 === 2) && (box7 == 1) && (box3 === 0)) {
                        box3 = 2;
                    }            
                    else if  ((box5 === 2) && (box1 === 0)) {
                        box1 = 2;
                    }
                    else if  ((box5 === 2) && (box3 === 0)) {
                        box3 = 2;
                    }
                    else if  ((box5 === 2) && (box7 === 0)) {
                        box7 = 2;
                    }
                    else if  ((box5 === 2) && (box9 === 0)) {
                        box9 = 2;
                    }
                    // if opponent has center

                    else if  ((box5 === 1) && (box1 === 0)) {
                        box1 = 2;
                    }
                    else if  ((box5 === 1) && (box3 === 0)) {
                        box3 = 2;
                    }
                    else if  ((box5 === 1) && (box7 === 0)) {
                        box7 = 2;
                    }
                    else if  ((box5 === 1) && (box9 === 0)) {
                        box9 = 2;
                    }
                    // i cant get corners, so take the sides
                    else if  ((box5 === 2) && (box2 === 0)) {
                        box2= 2;
                    }
                    else if  ((box5 === 2) && (box4 === 0)) {
                        box4 = 2;
                    }
                    else if  ((box5 === 2) && (box6 === 0)) {
                        box6 = 2;
                    }
                    else if  ((box5 === 2) && (box8 === 0)) {
                        box8 = 2;
                    }
                    // if opponents have sides
                    else if  ((box5 === 1) && (box2 === 0)) {
                        box2= 2;
                    }
                    else if  ((box5 === 1) && (box4 === 0)) {
                        box4 = 2;
                    }
                    else if  ((box5 === 1) && (box6 === 0)) {
                        box6 = 2;
                    }
                    else if  ((box5 === 1) && (box8 === 0)) {
                        box8 = 2;
                    }
                    else {
                        if (box1 === 0) {
                            box1 = 2;
                        }
                        if (box2 === 0) {
                            box2 = 2;
                        }
                        if (box3 === 0) {
                            box3 = 2;
                        }
                        if (box4 === 0) {
                            box4 = 2;
                        }
                        if (box6 === 0) {
                            box6 = 2;
                        }
                        if (box7 === 0) {
                            box7 = 2;
                        }
                        if (box8 === 0) {
                            box8 = 2;
                        }
                        if (box9 === 0) {
                            box9 = 2;
                        }
                    // }     
                } 
            }
        }    
    }
    players[0] = box1;
    players[1] = box2;
    players[2] = box3;
    players[3] = box4;
    players[4] = box5;
    players[5] = box6;
    players[6] = box7;
    players[7] = box8;
    players[8] = box9;
}