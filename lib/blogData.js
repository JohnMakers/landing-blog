// Simple in-memory blog store.
// Add/modify posts here. Place images under /public/blog/

export const posts = [
  {
  slug: "First-Time Dispensary Playbook: What to Expect (and How to Shop)",
  title: "Grand Opening & First-Timer Tips",
  image: "/blog/grand-opening.png",
  date: "2025-08-01",
  body: `
**By Wonderful Cannabis — Company by Afroman**

## How it works, start to finish
1) **Bring ID.** Government-issued, and make sure it’s not expired.  
2) **Know your goal.** Relax? Focus? Sleep? Pain relief? Share it—budtenders are here to match goals to products.  
3) **Pick a form.**  
   - **Flower:** classic, fast onset when smoked.  
   - **Pre-rolls:** zero setup, perfect for trying a strain.  
   - **Vapes:** low odor, quick effect.  
   - **Edibles:** long-lasting, slower onset (see our Edibles 101!).  
   - **Tinctures/Topicals:** precise dosing or localized relief.  
4) **Check THC & CBD.** THC = intensity; CBD = balance. Beginners do great with lower THC or a balanced THC:CBD product.  
5) **Ask about terpenes.** Citrus (limonene) can feel bright; piney (pinene) can feel fresh; lavender-like (linalool) can feel calming.  
6) **Buy small first.** Try grams or single pre-rolls before committing.

## Simple starter picks
- **Pre-roll sampler:** variety without the grind.  
- **Balanced gummy (2.5–5 mg THC with CBD):** gentle, predictable.  
- **Mellow vape cart:** discreet and easy.

## Pro tips
- Hydrate.  
- Don’t mix with alcohol.  
- Try new products at home first.  
- Keep notes on what you liked.

**Call to action:** Ready to shop with confidence? Visit **Wonderful Cannabis — Company by Afroman** and tell us your goal—we’ll do the matching.  

**Disclaimer:** Must be of legal age. Follow local laws. Content is educational, not medical advice.
  `.trim(),
  },
  {
  slug: "Edibles 101: Dose, Onset, and Why Isn't It Working Yet?",
  title: "Edibles 101 & Dosing Tips",
  image: "/blog/edibles-101.png",
  date: "2025-08-08",
  body: `
**By Wonderful Cannabis — Company by Afroman**

## The golden rule
**Start low, go slow.** Beginners: **2.5–5 mg THC**. Sensitive users can start even lower (1–2 mg).

## Onset timeline (what to expect)
- **Gummies/Chocolates:** 30–90 minutes to feel, **peak at 2–4 hours**, can last 4–8+ hours.  
- **Tinctures (under tongue):** may feel in 15–45 minutes, shorter overall duration.

## Smart first session
1) Eat a **normal snack** first (not an empty stomach).  
2) Take **2.5–5 mg THC**.  
3) **Wait a full 2 hours** before considering more.  
4) Keep **CBD on hand**; some people find CBD can soften an overly strong THC experience.

## If you took too much
- **Breathe and hydrate.**  
- **Black pepper sniff or chew** (anecdotal terpene trick some folks say helps).  
- **Distract** with calm music or a comfy show.  
- **Sleep it off.** It passes.

## Edible picks we love for beginners
- **Low-dose gummies** with CBD.  
- **Tincture with a measured dropper** for precision.

**Call to action:** Swing by **Wonderful Cannabis — Company by Afroman** for low-dose, beginner-friendly edibles and clear labels you can trust.  

**Disclaimer:** Must be of legal age. Follow local laws. Educational, not medical advice.
  `.trim(),
},
{
  slug: "Keep Your Flower Fresh: Storage Made Simple",
  title: "Keep Your Flower Fresh",
  image: "/blog/storage-fresh.png",
  date: "2025-08-15",
  body: `
**By Wonderful Cannabis — Company by Afroman**

## The enemies of freshness
- **Air:** dries out terpenes (flavor).  
- **Heat & Light:** degrade cannabinoids (potency).  
- **Humidity swings:** harsh smoke and loss of aroma.

## Your simple setup
- **An airtight glass jar** (amber/dark if possible).  
- **A 55–62% humidity pack** inside the jar.  
- **Cool, dark cabinet** (not the fridge or freezer—those cause moisture issues).

## What not to do
- **No plastic baggies:** they let terpenes escape and can create static.  
- **No constant opening/closing:** pick a smaller jar if you dip in often.  
- **No fruit peels:** mold risk is real.

## Bonus tips
- Label your jars with **strain + date**.  
- Store **pre-rolls** in a small tube with a humidity insert.  
- Rotate stock: **first in, first out**.

**Call to action:** Need jars or humidity packs? We stock the good stuff at **Wonderful Cannabis — Company by Afroman**—ask for our freshness kit.  

**Disclaimer:** Must be of legal age. Follow local laws. Educational, not medical advice.
  `.trim(),
},
{
  slug: "Terpenes for Beginners: Why Your Favorite Strain Smells (and Feels) the Way It Does",
  title: "Terpenes for Beginners",
  image: "/blog/terpenes-beginners.png",
  date: "2025-08-22",
  body: `
**By Wonderful Cannabis — Company by Afroman**

## What are terpenes?
Terpenes are aromatic compounds found in plants (including cannabis). They give strains their scent and can **influence vibe**—bright, calm, or focused—especially alongside cannabinoids (THC, CBD).

## Three you’ll meet often
- **Limonene** (citrus): many people describe it as **uplifting/bright**.  
- **Myrcene** (earthy, mango): commonly linked with **chill, couchy vibes**.  
- **Pinene** (pine): often noted as **fresh/clear-headed**.

*(Everyone’s body is different; effects vary person-to-person.)*

## How to use this as a shopper
1) **Smell + label:** read the terpene profile on the jar; note what your nose likes.  
2) **Track your wins:** when you enjoy a strain, write down its top terpenes.  
3) **Match goals:** want a daytime lift? Look for **limonene-forward**; want wind-down? Try **myrcene-heavy**; want clarity? Explore **pinene**.

## Product types with terp labels
- **Flower & pre-rolls:** look for terp % on batch labels.  
- **Vapes:** many list the dominant terp blend.  
- **Edibles:** some brands use terp cues in flavor lines.

**Call to action:** Curious what terp profile fits your goals? Ask our budtenders at **Wonderful Cannabis — Company by Afroman**—we’ll help you build a favorites list.  

**Disclaimer:** Must be of legal age. Follow local laws. Educational, not medical advice.
  `.trim(),
},
];

// Helpers
export function getAllPosts() {
  // newest first
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
