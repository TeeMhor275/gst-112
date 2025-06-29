// Quiz data
const quizData = [
    {
        question: "1. Philosophy evolves from which of these Greek words?",
        options: [
            "(a) philo & sophy",
            "(b) philein & sophia",
            "(c) philo & sofia",
            "(d) philo & sopha"
        ],
        correctAnswer: 1,
        explanation: "ANS. B   philein & Sophia"
    },
    {
        question: "2. The definition of Philosophy as a reflection of human experience is generally based on the _",
        options: [
            "(a) Wide scope of the discipline",
            "(b) Quarrels among philosophers",
            "(c) Diverse human experiences",
            "(d) A and C"
        ],
        correctAnswer: 3,
        explanation: "ANS. D      A and C"
    },
    {
        question: "3. Philosophy as an academic discipline is filled with lots of misconceptions that have misled many into thinking that it does not have any relevance to other academic fields!",
        options: [
            "(a) Incorrect",
            "(b) Correct",
            "(c) Not correct",
            "(d) None of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B      Correct"
    },
    {
        question: "4. Philosophy is defined as the __ inquiry into the principles and presuppositions of any field of study",
        options: [
            "(a) Systematic",
            "(b) Automatic",
            "(c) Biotech",
            "(d) Asymmetric"
        ],
        correctAnswer: 0,
        explanation: "ANS. A      Systematic"
    },
    {
        question: "5. The main branches of philosophy are _",
        options: [
            "(a) Metaphysics, Theology and Ethics",
            "(b) Ethics, Axiology and Cosmology",
            "(c) Metaphysics, Epistemology and Ethics",
            "(d) Mathematics, Physics and Chemistry"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Metaphysics, Epistemology and Ethics"
    },
    {
        question: "6. Thales on his study of Cosmology contend that everything in nature as they appear is which of the following",
        options: [
            "(a) Air",
            "(b) Fire",
            "(c) Earth",
            "(d) Water"
        ],
        correctAnswer: 3,
        explanation: "ANS. D   Water"
    },
    {
        question: "7. The Greek philosophy which gave birth of Western Philosophy emerged as",
        options: [
            "(a) A critical social science",
            "(b) As intellectual gymnastics",
            "(c) Grew out of mythology, religion and superstition",
            "(d) None of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C      Grew out of mythology, religion and superstition"
    },
    {
        question: "8. Philosophy as 'search for reality' holds the view that the discipline",
        options: [
            "(a) Aim at discovering the principles which underlies every phenomenon",
            "(b) Aim at discovering human experiences",
            "(c) Aim at discovering social knowledge",
            "(d) All of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B Aim at discovering human experiences"
    },
    {
        question: "9. ____ is the study of values in human behavior",
        options: [
            "(a) Ontology",
            "(b) Epistemology",
            "(c) Ethics",
            "(d) Psychology"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Ethics"
    },
    {
        question: "10. The thrust of Ancient Greek philosophy is a search for _",
        options: [
            "(a) The primary knowledge of the universe",
            "(b) Certainty",
            "(c) A and B",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D   All of the above"
    },
    {
        question: "11. In the medieval period Philosophy __",
        options: [
            "(a) Moved away from the Greeks to Christian thinkers",
            "(b) Became the tool for theology",
            "(c) All of the above",
            "(d) None of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C      All of the above"
    },
    {
        question: "12. Philosophers disagree among themselves simply because_",
        options: [
            "(a) They deal with a variety of conflicting issues",
            "(b) They deal with complex and conflicting issues",
            "(c) Practitioners of the discipline come from diverse background",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D      All of the above"
    },
    {
        question: "13. The common definition of Logic as the 'rules of correct thinking' is _",
        options: [
            "(a) Grossly inadequate",
            "(b) Incorrect",
            "(c) Invalid",
            "(d) Valid"
        ],
        correctAnswer: 3,
        explanation: "ANS. D      Valid"
    },
    {
        question: "14. Any discipline characterized as rational inquiry is  __",
        options: [
            "(a) Critical",
            "(b) Problem-solving",
            "(c) Ethical",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D   All of the above"
    },
    {
        question: "15. __ is a branch of philosophy that deals with reasoning",
        options: [
            "(a) Ethics",
            "(b) Axiology",
            "(c) Ontology",
            "(d) None of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D   None of the above"
    },
    {
        question: "16. The word Metaphysics was first coined by __",
        options: [
            "(a) Andronicus of Rhodes",
            "(b) Thales",
            "(c) Anaximander",
            "(d) Democritus"
        ],
        correctAnswer: 0,
        explanation: "ANS. A      Andronicus of Rhodes (Note: The provided answer was incorrect, the correct answer is Andronicus of Rhodes)"
    },
    {
        question: "17. Logic assesses reasoning as valid or invalid __",
        options: [
            "(a) By stating how reasoning is adduced as evidence to support certain propositions",
            "(b) By showing how propositions are combined to make to make inferential judgments",
            "(c) By rejecting valid statements",
            "(d) A and B are correct"
        ],
        correctAnswer: 3,
        explanation: "ANS. D      A and B are correct"
    },
    {
        question: "18. Reasoning is making a __ and giving justification for the claim",
        options: [
            "(a) Premise",
            "(b) Statement",
            "(c) Claim",
            "(d) Conclusion"
        ],
        correctAnswer: 0,
        explanation: "ANS. A    Premise"
    },
    {
        question: "19. Reasoning as a mental process in Philosophy usually takes place in which of the following?",
        options: [
            "(a) Brain",
            "(b) Heart",
            "(c) Mind",
            "(d) Blood"
        ],
        correctAnswer: 2,
        explanation: "ANS. C      Mind"
    },
    {
        question: "20. Reasoning is technically referred to as a(n) __",
        options: [
            "(a) Thought",
            "(b) Intelligence",
            "(c) Argument",
            "(d) Morality"
        ],
        correctAnswer: 2,
        explanation: "ANS. C      Argument"
    },
    {
        question: "21. _ is concerned with understanding or evaluating the character of an individual",
        options: [
            "(a) Psychology",
            "(b) Philosophy",
            "(c) Ethics",
            "(d) All of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C    Ethics"
    },
    {
        question: "22. Reasoning generally makes human beings more __ than animals.",
        options: [
            "(a) Critical",
            "(b) Analytical",
            "(c) Rational",
            "(d) Inquisitive"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Rational"
    },
    {
        question: "23. When human being reason well, they are likely to arrive at a justifiable __",
        options: [
            "(a) Conclusion",
            "(b) End",
            "(c) Truth",
            "(d) All of the above"
        ],
        correctAnswer: 0,
        explanation: "ANS. A    Conclusion"
    },
    {
        question: "24. ____ helps human beings to communicate logically.",
        options: [
            "(a) Thinking",
            "(b) Reasoning",
            "(c) Deductive reasoning",
            "(d) Logic"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Deductive reasoning"
    },
    {
        question: "25. A(n) ___ is a statement that can be either true or false",
        options: [
            "(a) Argument",
            "(b) Fact",
            "(c) Proposition",
            "(d) All of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B  Fact"
    },
    {
        question: "26. __ is a declarative statement that has a truth value",
        options: [
            "(a) Assumption",
            "(b) Proposition",
            "(c) Axiology",
            "(d) Fact"
        ],
        correctAnswer: 1,
        explanation: "ANS. B Proposition"
    },
    {
        question: "27. Wisdom as aspect of Philosophy enables possessor to ___",
        options: [
            "(a) Act wisely on the spur of a moment",
            "(b) Transcend mere facts to reconcile conflicting interest",
            "(c) Draw quick implications from actions to utterances",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D   All of the above"
    },
    {
        question: "28. A(n)___ is a set of propositions in which it is claimed that the truth of one of the propositions is established or inferred",
        options: [
            "(a) Fallacy",
            "(b) Argument",
            "(c) Reasoning",
            "(d) None of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B   Argument"
    },
    {
        question: "29. As a pursuit of Wisdom, ___ raises question almost about everything",
        options: [
            "(a) Knowledge",
            "(b) Experience",
            "(c) Philosophy",
            "(d) All of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Philosophy"
    },
    {
        question: "30. _ is an investigation into the nature of virtuous life or the right way to live",
        options: [
            "(a) Philosophy",
            "(b) Rational Inquiry",
            "(c) Ethics",
            "(d) All of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Ethics"
    },
    {
        question: "31. ____ is a group of words that make sense",
        options: [
            "(a) A sentence",
            "(b) A proposition",
            "(c) An Assumption",
            "(d) An Assertion"
        ],
        correctAnswer: 0,
        explanation: "ANS. A   A sentence"
    },
    {
        question: "32. Fallacies can be categorized as either __ or __",
        options: [
            "(a) Formal or Informal",
            "(b) Normal or Abnormal",
            "(c) Logical or Illogical",
            "(d) All of the above"
        ],
        correctAnswer: 0,
        explanation: "ANS. A   Formal or Informal"
    },
    {
        question: "33. __ is a system of accumulating knowledge that uses observation and experimentation to describe natural phenomena",
        options: [
            "(a) Logic",
            "(b) Epistemology",
            "(c) Science",
            "(d) Social science"
        ],
        correctAnswer: 2,
        explanation: "ANS. C      Science"
    },
    {
        question: "34. In its simplest sense, Epistemology deals with the theory of",
        options: [
            "(a) Knowledge",
            "(b) Wisdom",
            "(c) Idealism",
            "(d) Existentialism"
        ],
        correctAnswer: 0,
        explanation: "ANS. A  Knowledge"
    },
    {
        question: "35. __ is a branch of Philosophy that is concerned with reason",
        options: [
            "(a) Axiology",
            "(b) Epistemology",
            "(c) Logic",
            "(d) All of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C      Logic"
    },
    {
        question: "36. __ are propositions (statement) or a sentence that are either true or false",
        options: [
            "(a) Evidences",
            "(b) Facts",
            "(c) Claims",
            "(d) All of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C    Claims"
    },
    {
        question: "37. ___ is a discipline or human activity that is concerned with the fundamental principles of reality",
        options: [
            "(a) Philosophy",
            "(b) Psychology",
            "(c) Biology",
            "(d) Social Psychology"
        ],
        correctAnswer: 0,
        explanation: "ANS. A    Philosophy"
    },
    {
        question: "38. A ___ is a declarative statement that has a truth value.",
        options: [
            "(a) Sentence",
            "(b) Proposition",
            "(c) Speech",
            "(d) Judgment"
        ],
        correctAnswer: 1,
        explanation: "ANS. B     Proposition"
    },
    {
        question: "39. What does a Philosopher mean when he searches for 'really real'?",
        options: [
            "(a) Truth about things",
            "(b) Facts about the world",
            "(c) Organizing principles of the world",
            "(d) None of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C  Organizing principles of the world"
    },
    {
        question: "40. Philosophy as the search for truth implies that",
        options: [
            "(a) Truth as coherence and correspondence",
            "(b) Truth as the search for the beautiful",
            "(c) Truth as pragmatic and as disclosure",
            "(d) None of the above"
        ],
        correctAnswer: 0,
        explanation: "ANS. A   Truth as coherence and correspondence"
    },
    {
        question: "41. Which of the following refers to the objective study of nature and the physical universe?",
        options: [
            "(a) Moral philosophy",
            "(b) Global philosophy",
            "(c) Natural philosophy",
            "(d) Universalism"
        ],
        correctAnswer: 2,
        explanation: "ANS. C Natural philosophy"
    },
    {
        question: "42. __ refers to the study of the meaning and justification of fundamental religion claims about the nature and existence of God.",
        options: [
            "(a) Philosophy of God",
            "(b) Philosophy of Nature",
            "(c) Philosophy of Existentialism",
            "(d) Philosophy of Religion"
        ],
        correctAnswer: 3,
        explanation: "ANS. D  Philosophy of Religion"
    },
    {
        question: "43. Existentialism, a movement in philosophy contends that __",
        options: [
            "(a) Philosophy was never an exercise in pure, armchair and abstractions",
            "(b) The aim of philosophy is concerned with concrete problems of human existence",
            "(c) The central task of philosophy is to analyze the nature of human existence",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D    All of the above"
    },
    {
        question: "44. Metaphysics is divided into two broad schools of thought",
        options: [
            "(a) Rationalism and Empiricism",
            "(b) Idealism and Materialism",
            "(c) Relativism and Skepticism",
            "(d) Absolutism and Totalitarianism"
        ],
        correctAnswer: 1,
        explanation: "ANS. B   Idealism and Materialism"
    },
    {
        question: "45. Philosophy of __ is concerned with mental processes and symbols on world internal and external frame",
        options: [
            "(a) Knowledge",
            "(b) Perception",
            "(c) Existentialism",
            "(d) Neurology"
        ],
        correctAnswer: 1,
        explanation: "ANS. B     Perception"
    },
    {
        question: "46. A __ is a set of words that is complete in itself and contain a subject and predicate",
        options: [
            "(a) Noun",
            "(b) Pronoun",
            "(c) Statement",
            "(d) Sentence"
        ],
        correctAnswer: 3,
        explanation: "ANS. D    Sentence"
    },
    {
        question: "47. Which of the following is referred to as a definite or clear expression of something in speech or writing?",
        options: [
            "(a) Sentence",
            "(b) Statement",
            "(c) Proposition",
            "(d) All of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B    Statement"
    },
    {
        question: "48. ___ is a form of reasoning in which conclusion is drawn from two given or assumed propositions",
        options: [
            "(a) Algorithm",
            "(b) Syllogism",
            "(c) Critical thinking",
            "(d) All of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B  Syllogism"
    },
    {
        question: "49. __ is a wide and sound knowledge of reality that affects a person and the willingness to apply such knowledge for the promotion of the general wellbeing",
        options: [
            "(a) Knowledge",
            "(b) Wisdom",
            "(c) Experience",
            "(d) All of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B      Wisdom"
    },
    {
        question: "50. To arrive at valid reasoning on a discourse, which of the following is expressed?",
        options: [
            "(a) Consequence",
            "(b) Inference",
            "(c) Deduction",
            "(d) All of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Deduction"
    },
    {
        question: "51. Which of the following is the study of being or existence?",
        options: [
            "(a) Determinism",
            "(b) Realism",
            "(c) Ontology",
            "(d) All of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Ontology"
    },
    {
        question: "52. Epistemology is otherwise referred to as the theory of __",
        options: [
            "(a) Knowledge",
            "(b) Pragmatism",
            "(c) Imagination",
            "(d) Existentialism"
        ],
        correctAnswer: 0,
        explanation: "ANS. A  Knowledge"
    },
    {
        question: "53. The difference between knowledge and belief is that while _",
        options: [
            "(a) Knowledge implies certainty of claim, belief does not",
            "(b) Knowledge entail evidence/proof, belief does not",
            "(c) The former involves the latter; the latter does not involve the former",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D    All of the above"
    },
    {
        question: "54. Logic is __",
        options: [
            "(a) Connected to Philosophy",
            "(b) A thesis of Philosophy",
            "(c) A branch of Philosophy",
            "(d) All of the Above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D      All of the Above"
    },
    {
        question: "55. ___ is the quality of a claim to be either true of false",
        options: [
            "(a) Truth value",
            "(b) Claim",
            "(c) Premise",
            "(d) None of the above"
        ],
        correctAnswer: 0,
        explanation: "ANS. A Truth value"
    },
    {
        question: "56. The transition from premises to conclusion in any argument in logic is called _",
        options: [
            "(a) Deduction",
            "(b) Induction",
            "(c) Inference",
            "(d) Conclusion"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Inference"
    },
    {
        question: "57. All kinds of Logic deals with argument",
        options: [
            "(a) True",
            "(b) False",
            "(c) All of the above",
            "(d) None of the above"
        ],
        correctAnswer: 0,
        explanation: "ANS. A   True"
    },
    {
        question: "58. ____ is referred to as human being who is normal, has capacity to reason and is aware of the consequences of his/her actions",
        options: [
            "(a) Moral Agent",
            "(b) Social Agent",
            "(c) Humanistic Agent",
            "(d) Philosophical Agent"
        ],
        correctAnswer: 0,
        explanation: "ANS. A     Moral Agent"
    },
    {
        question: "59. ___ in philosophy is a functional excellence in an individual that makes the individual morally superior",
        options: [
            "(a) Vice",
            "(b) Virtue",
            "(c) Villain",
            "(d) All of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B Virtue"
    },
    {
        question: "60. Which of the following ethics is an example of moral reasoning?",
        options: [
            "(a) Normative ethics",
            "(b) Descriptive ethics",
            "(c) Meta-ethics",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D     All of the above"
    },
    {
        question: "61. The processes involved in Reasoning are classified as –",
        options: [
            "(a) Inductive and Deductive",
            "(b) Emotive and Evocative",
            "(c) Assertive and Interpretative",
            "(d) Disjunctive and Constructive"
        ],
        correctAnswer: 0,
        explanation: "ANS. A     Inductive and Deductive"
    },
    {
        question: "62. _____ is an argument whose premises fail to offer support to the conclusion",
        options: [
            "(a) Truth Value",
            "(b) Fallacy",
            "(c) Predicate",
            "(d) Error"
        ],
        correctAnswer: 1,
        explanation: "ANS. B       Fallacy"
    },
    {
        question: "63. Philosophy as an academic discipline is relevant to __",
        options: [
            "(a) Humanities",
            "(b) Formal science",
            "(c) Mathematics",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D     All of the above"
    },
    {
        question: "64. 'Most Nigerians are corrupt; Martins is a Nigerian; Therefore, Martins is corrupt'. The truth of the conclusion is _",
        options: [
            "(a) Certain",
            "(b) Concrete",
            "(c) Probable",
            "(d) Valid"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Probable"
    },
    {
        question: "65. __ and _ are the two forms of reasoning in an argument",
        options: [
            "(a) Premise and Claim",
            "(b) Claim and Proposition",
            "(c) Claim and Conclusion",
            "(d) All of the above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C    Claim and Conclusion"
    },
    {
        question: "66. The validity or invalidity of an argument depends on ___",
        options: [
            "(a) The maternal content",
            "(b) Its form or formal structure",
            "(c) Premises and Secondary Proposition",
            "(d) Sentences and Propositions"
        ],
        correctAnswer: 1,
        explanation: "ANS. B Its form or formal structure"
    },
    {
        question: "67. Which of the following explains the truth of a conclusion as claimed to be inferred from the premises of an argument?",
        options: [
            "(a) Inductive Argument",
            "(b) Deductive argument",
            "(c) Logical Argument",
            "(d) None of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B    Deductive argument"
    },
    {
        question: "68. Deductive argument is __ when the relationship between its premises and conclusions is such that the truth of it premises, if granted, does not imply the truth of the its conclusion",
        options: [
            "(a) Invalid",
            "(b) Valid",
            "(c) Altruistic",
            "(d) None of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B     Valid"
    },
    {
        question: "69. One of the objectives of studying logic is _",
        options: [
            "(a) To assist students' acquire the power to think critically",
            "(b) To equip students' with the ability to think clearly on any issue",
            "(c) To enhance capacity to communicate thoughts reasonably, accurately and correctly",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D     All of the above"
    },
    {
        question: "70. The fallacy of __ is usually committed when one assumes that what is true of a whole must be true of part",
        options: [
            "(a) Accident",
            "(b) Slippery slope",
            "(c) Division",
            "(d) Composition"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Division"
    },
    {
        question: "71. In an Argument there are usually two (2) forms of reasoning",
        options: [
            "(a) Preposition and sentence",
            "(b) Claims and Conclusions",
            "(c) Premise and Conclusion",
            "(d) Truth Value and Deduction"
        ],
        correctAnswer: 1,
        explanation: "ANS. B    Claims and Conclusions"
    },
    {
        question: "72. What fallacy is committed when a term or word is used in an argument to mean different thing",
        options: [
            "(a) Amphiboly",
            "(b) Argumentum ad Hominen",
            "(c) Pettitio Principia",
            "(d) Equivocation"
        ],
        correctAnswer: 3,
        explanation: "ANS. D     Equivocation"
    },
    {
        question: "73. ___ is an exclusive attribute that comprise both the form and the content of a deductive argument",
        options: [
            "(a) Validity",
            "(b) Invalidity",
            "(c) Soundness",
            "(d) None of the Above"
        ],
        correctAnswer: 2,
        explanation: "ANS. C       Soundness"
    },
    {
        question: "74. Aristotle's philosophical thought is expressed in which of the following disciplines?",
        options: [
            "(a) Zoology",
            "(b) Physics",
            "(c) Chemistry",
            "(d) All of the Above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D    All of the Above"
    },
    {
        question: "75. The concept of __ is a goal-oriented principle that seeks to maximize welfare and happiness for the greatest number of people",
        options: [
            "(a) Democratic Dividends",
            "(b) Good Governance",
            "(c) Utilitarianism",
            "(d) Totalitarianism"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Utilitarianism"
    },
    {
        question: "76. __ is a considered as a view that an individual should act and maximize his/her own good or benefit",
        options: [
            "(a) Ethical Theories",
            "(b) Ethical Egoism",
            "(c) Self-actualization",
            "(d) Self-Esteem"
        ],
        correctAnswer: 1,
        explanation: "ANS. B    Ethical Egoism"
    },
    {
        question: "77. Morality comes from the Greek word mores that means",
        options: [
            "(a) Social Habits",
            "(b) Customs",
            "(c) Manners",
            "(d) All of the Above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D   All of the Above"
    },
    {
        question: "78. Which of the following is an investigation into the nature of virtuous life or the right way to live",
        options: [
            "(a) Customs",
            "(b) Ethics",
            "(c) Values",
            "(d) all of the above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B Ethics"
    },
    {
        question: "79. Immanuel Kant invented the term,",
        options: [
            "(a) Neurology",
            "(b) Dentistry",
            "(c) Deo-philosophy",
            "(d) Deontology"
        ],
        correctAnswer: 3,
        explanation: "ANS. D     Deontology"
    },
    {
        question: "80. The two prominent Greek philosophers aside Socrates are _ and _",
        options: [
            "(a) Plato and Grotius",
            "(b) Pythagoras and Aristotle",
            "(c) Plato and Aristotle",
            "(d) Heraclitus and Anaximander"
        ],
        correctAnswer: 2,
        explanation: "ANS. C Plato and Aristotle"
    },
    {
        question: "81. In the words of Plato rational element is centered on which of the following?",
        options: [
            "(a) Knowledge",
            "(b) Experience",
            "(c) Reason",
            "(d) Virtue"
        ],
        correctAnswer: 2,
        explanation: "ANS. C      Reason"
    },
    {
        question: "82. The academic discipline that studies human mental process and consciousness is",
        options: [
            "(a) Psychology",
            "(b) Sociology",
            "(c) Philosophy",
            "(d) All of the above"
        ],
        correctAnswer: 0,
        explanation: "ANS. A     Psychology"
    },
    {
        question: "83. Karl Marx's contribution to the field of Philosophy is closely linked with __",
        options: [
            "(a) Man and the State",
            "(b) Human Beings and Industrial Society",
            "(c) Proletariat and Bourgeoisie",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D       All of the above"
    },
    {
        question: "84. __ requires a close connection between professionalism and commitment to serve others truthfully",
        options: [
            "(a) Respect",
            "(b) Empathy",
            "(c) Loyalty",
            "(d) Honesty"
        ],
        correctAnswer: 3,
        explanation: "ANS. D      Honesty"
    },
    {
        question: "85. __ is the value based on assumption that an individual is in full control of himself /herself and therefore accountable for his/her actions and conduct",
        options: [
            "(a) Capability",
            "(b) Accountability",
            "(c) Responsibility",
            "(d) Decency"
        ],
        correctAnswer: 2,
        explanation: "ANS. C      Responsibility"
    },
    {
        question: "86. ___ has to do with getting things issues rightly either by figures, facts, names or claims",
        options: [
            "(a) Decency",
            "(b) Transparency",
            "(c) Accuracy",
            "(d) Professionalism"
        ],
        correctAnswer: 2,
        explanation: "ANS. C     Accuracy"
    },
    {
        question: "87. ___ is the form of justice where due considerations should be given to all without any discrimination",
        options: [
            "(a) Social Justice",
            "(b) Equality",
            "(c) Fairness",
            "(d) Kindness"
        ],
        correctAnswer: 2,
        explanation: "ANS. C     Fairness"
    },
    {
        question: "88. __ is a character trait that enables people regard and be of assistance by virtue of position",
        options: [
            "(a) Honesty",
            "(b) Transparency",
            "(c) Good Behavior",
            "(d) Kindness"
        ],
        correctAnswer: 3,
        explanation: "ANS. D      Kindness"
    },
    {
        question: "89. Logic, philosophy and human existence is enmeshed in all, except",
        options: [
            "(a) Physics Alone",
            "(b) Mathematics Alone",
            "(c) Biological sciences",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D    All of the above"
    },
    {
        question: "90. Philosophy as a systematic or scientific inquiry cuts across",
        options: [
            "(a) Human Nature",
            "(b) Culture and Society",
            "(c) Universe",
            "(d) All the Above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D    All the Above"
    },
    {
        question: "91. __ is concerned with the study of the physical universe",
        options: [
            "(a) Cosmology",
            "(b) Biology",
            "(c) Astronomy",
            "(d) Etymology"
        ],
        correctAnswer: 0,
        explanation: "ANS. A    Cosmology"
    },
    {
        question: "92. Philosophy as an academic discipline is __",
        options: [
            "(a) Empirical",
            "(b) Historical",
            "(c) Analytical",
            "(d) All of the Above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D      All of the Above"
    },
    {
        question: "93. The study of philosophy is synonymous with which of the following statements?",
        options: [
            "(a) Broadens knowledge",
            "(b) Inculcates ethical values",
            "(c) Helps reason correctly",
            "(d) All of the above"
        ],
        correctAnswer: 3,
        explanation: "ANS. D     All of the above"
    },
    {
        question: "94. A(n) __ is a logical error in reasoning",
        options: [
            "(a) Truth Value",
            "(b) Fallacy",
            "(c) Argument",
            "(d) All of the Above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B Fallacy"
    },
    {
        question: "95. __ is an investigation into the nature of virtuous life and the right way to live",
        options: [
            "(a) Morality",
            "(b) Respect",
            "(c) Responsibility",
            "(d) Ethics"
        ],
        correctAnswer: 3,
        explanation: "ANS. D Ethics"
    },
    {
        question: "96. __  a functional excellence in an individual that makes the individual morally or intellectually superior",
        options: [
            "(a) Virtuous",
            "(b) Value",
            "(c) Virtue",
            "(d) Loyalty"
        ],
        correctAnswer: 2,
        explanation: "ANS. C    Virtue"
    },
    {
        question: "97. Which of the following was said to have invented the study of formal logic",
        options: [
            "(a) Socrates",
            "(b) Plato",
            "(c) Aristotle",
            "(d) Heraclitus"
        ],
        correctAnswer: 2,
        explanation: "ANS. C   Aristotle"
    },
    {
        question: "98. Thomas Aquinas' contribution to philosophy is well expressed in which of the following fields?",
        options: [
            "(a) Social Philosophy",
            "(b) Moral Philosophy",
            "(c) Political Philosophy",
            "(d) All of the Above"
        ],
        correctAnswer: 1,
        explanation: "ANS. B      Moral Philosophy"
    },
    {
        question: "99. Fallacy of __ occurs where is no clear connection between points/facts/propositions",
        options: [
            "(a) False Cause",
            "(b) Slippery Slope",
            "(c) Ignorantam",
            "(d) Verecundiam"
        ],
        correctAnswer: 1,
        explanation: "ANS. B      Slippery Slope"
    },
    {
        question: "100. Fallacy of __ is the type of fallacy that in most cases the conclusion arises from irrelevant claims",
        options: [
            "(a) Ambiguity",
            "(b) Relevance",
            "(c) Presumption",
            "(d) All of the Above"
        ],
        correctAnswer: 0,
        explanation: "ANS. A       Ambiguity"
    }
];

// DOM Elements
const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTextElement = document.getElementById('feedback-text');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const progressBar = document.getElementById('progress-bar');
const scoreElement = document.getElementById('score');
const percentageElement = document.getElementById('percentage');
const resultsContainer = document.getElementById('results-container');
const totalQuestionsElement = document.getElementById('total-questions');
const correctAnswersElement = document.getElementById('correct-answers');
const wrongAnswersElement = document.getElementById('wrong-answers');
const finalPercentageElement = document.getElementById('final-percentage');
const restartButton = document.getElementById('restart-btn');

// Quiz state
let currentQuestionIndex = 0;
let userAnswers = Array(quizData.length).fill(null);
let score = 0;
let quizCompleted = false;

// Initialize the quiz
function initQuiz() {
    currentQuestionIndex = 0;
    userAnswers = Array(quizData.length).fill(null);
    score = 0;
    quizCompleted = false;
    
    // Hide results and show quiz
    resultsContainer.style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    
    // Update UI
    updateScore();
    showQuestion();
}

// Display the current question
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Update question number and text
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    questionTextElement.textContent = currentQuestion.question;
    
    // Update progress bar
    progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length * 100)}%`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-btn');
        optionButton.textContent = option;
        
        // Highlight selected option
        if (userAnswers[currentQuestionIndex] === index) {
            optionButton.classList.add('selected');
        }
        
        // Highlight correct/incorrect answers if quiz is completed
        if (quizCompleted) {
            if (index === currentQuestion.correctAnswer) {
                optionButton.classList.add('correct');
            } else if (userAnswers[currentQuestionIndex] === index && index !== currentQuestion.correctAnswer) {
                optionButton.classList.add('incorrect');
            }
        }
        
        optionButton.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionButton);
    });
    
    // Show feedback if answer was previously selected
    if (userAnswers[currentQuestionIndex] !== null) {
        showFeedback();
    } else {
        feedbackContainer.classList.remove('show');
    }
    
    // Update navigation buttons
    prevButton.disabled = currentQuestionIndex === 0;
    
    // Show submit button on last question if not completed
    if (currentQuestionIndex === quizData.length - 1 && !quizCompleted) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

// Handle option selection
function selectOption(optionIndex) {
    if (quizCompleted) return;
    
    // Remove selected class from all options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    document.querySelectorAll('.option-btn')[optionIndex].classList.add('selected');
    
    // Store user's answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Show feedback
    showFeedback();
}

// Show feedback for the current question
function showFeedback() {
    if (userAnswers[currentQuestionIndex] === null) return;
    
    const currentQuestion = quizData[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    feedbackContainer.classList.add('show');
    
    if (userAnswer === currentQuestion.correctAnswer) {
        feedbackContainer.className = 'feedback-container show feedback-correct';
        feedbackTextElement.textContent = 'Correct! ' + currentQuestion.explanation;
    } else {
        feedbackContainer.className = 'feedback-container show feedback-incorrect';
        feedbackTextElement.textContent = 'Incorrect. ' + currentQuestion.explanation;
    }
}

// Navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// Navigate to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Calculate and update score
function updateScore() {
    score = 0;
    
    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] !== null && userAnswers[i] === quizData[i].correctAnswer) {
            score++;
        }
    }
    
    const percentage = Math.round((score / quizData.length) * 100);
    
    scoreElement.textContent = `Score: ${score}`;
    percentageElement.textContent = `${percentage}%`;
}

// Submit the quiz
function submitQuiz() {
    quizCompleted = true;
    updateScore();
    showQuestion();
    
    // Show results
    document.querySelector('.quiz-container').style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Update results
    totalQuestionsElement.textContent = quizData.length;
    correctAnswersElement.textContent = score;
    wrongAnswersElement.textContent = quizData.length - score;
    finalPercentageElement.textContent = `${Math.round((score / quizData.length) * 100)}%`;
}

// Event listeners
prevButton.addEventListener('click', prevQuestion);
nextButton.addEventListener('click', nextQuestion);
submitButton.addEventListener('click', submitQuiz);
restartButton.addEventListener('click', initQuiz);

// Start the quiz
initQuiz();