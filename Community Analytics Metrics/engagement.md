# 

## Personal Information

**Name** Karan Kartikeya

**Email** karankartikey72@gmail.com

**University** Graphic Era Hill University

**Major** Computer Science

**GitHub** [<u>KaranKartikeya</u>](https://github.com/karankartikeya)

**Location** Dehradun, Uttarakhand, India


</br>

# ABOUT ME

I am an undergraduate student in my pre final year of B.Tech(CS) from Graphic Era Hill University Dehradun. I am a full stack developer currently interning as a Backend Developer at Zupay.

I started with Open-source and till now I am contributing to various organizations in it. I have experience of 3+ years in field of development. 

I have contributed to various communities such as MLH, FOSSASIA, GSSOC, CodeZoned, Community Classroom and many other. I have led teams in hackathon and also got special mentions in many of them. 

Here I'll be submitting a proposal that could help communities to increase engagement among their users.

</br>

# PROBLEM STATEMENT 

While improving engagement is highly operational for Community, how can the product help in making this process easier?

Keeping Habitate into consideration you have to design a process which will help in the community engagement.

</BR>

# SOLUTION DESCRIPTION

1. **Make it a Habit** : In this feature the community members need to login and spin a wheel at every 24 hours to gain some points which they can redeem in Habitate subscriptions or merchandise.

    **How to build this** : We can take the help of the already integrated service in Habitate which enables to see the number of online users. We just need to store the session time in our database for that user and the next time he/she logins to the community, we need to check the last stored spin time for that user and update it with the new if it has exceeded the 24 hrs time limit.

     **What does it do for the community** : This boosts up the engagement of the user in the community and will help in growing the community and Habitate.

2.  **Habitate Winter/Summer Games** :  Nowadays we can observe how the gaming industry is getting boom, so making use of that we could give the communities a premium feature mentioned below. 
        In this feature we would be integrating some games for the communities which a community can unlock by gaining some coins or points. These games would be held quarterly and would require the community members be active on their community to perform well.
        This game league will have two main phases where one would be in Summer and other in Winter. This would be conducted for a span of 10 days at max where the communities would be competing against each other to win the Habitate Games.

3. **Introduction of Habots** : In this feature the community members will be allowed to use some Habots(bots offered by Habitate) for better interaction among their community. Some of the Habots that will be helpful in communities can be:

    * **Moderation HaBots** : This Habot will help nullifying the false links and abusive statements in the community.
    * **Chat Habots** : This Habot will help in creating random chat sessions and creating rooms for special standups in communities.
    * **RGB color picker** : This fun Habot can pick colors in image uploaded.

    </br>

    **How to build this** : We can use Symphony Java Client Library to make bots for these or can also integrate Webrtc in Java to make rooms for special standups within the community or among the communites.

    **What does it do for the community** : This boosts up the features provided by the software as compared to it's competitors.

    **Code for some of the bots** : 

    ```java
    public class RGBBotColor {
        public static Color[][] loadPixelsFromImage(File file) throws IOException {

            BufferedImage image = ImageIO.read(file);
            Color[][] colors = new Color[image.getWidth()][image.getHeight()];

            for (int x = 0; x < image.getWidth(); x++) {
            for (int y = 0; y < image.getHeight(); y++) {
                colors[x][y] = new Color(image.getRGB(x, y));
            }
        }

        return colors;
    }
    ```
    Others can be found [here](https://github.com/karankartikeya/Habots.git)

  </br>

# CONCLUSION
I want to thank the mentors **Aashish Ramamurthy** and **Sneha Prabhu** for always being there whenever we had any query regarding the submission and product handling.
Also, special thanks to SAWO and HABITATE for giving us an oppurtunity to test our skills as a developer and product tester.

