# import sys
# data = sys.argv[1]

# print(int(data) + 1)

from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import networkx as nx
import matplotlib.pyplot as plt

app = Flask(__name__)
CORS(app)

def aStar(player, table, pieces):
  G = nx.DiGraph()

  G.add_nodes_from([
      (0, { "peça": 0,
            "valor": 0,
            "mesa": [*table],
            "hand": [*player],
            "pieces": [*pieces],
            "myTurn": True,
            "side": "start"})
  ])


  open = [0]

  newIndex = 1

  while(len(open) and newIndex < 10000):

    #pegando Index do nó a ser checado
    nodeIndex = max([(x, G.nodes[x]['valor']) for x in open], key = lambda x: x[-1])[0]

    open.remove(nodeIndex)

    availablePieces = []

    if(len(G.nodes[nodeIndex]['hand']) > 0):

      #removendo o nó que será checado a lista open


      #vendo quais peças podem ser jogadas
      goal = [G.nodes[nodeIndex]['mesa'][0][0],G.nodes[nodeIndex]['mesa'][-1][1]]


      if(G.nodes[nodeIndex]['myTurn']): #se for a vez do agente
        availablePieces = [piece for piece in G.nodes[nodeIndex]["hand"] if (goal[0] in piece) or (goal[1] in piece)]
      else:
        availablePieces = [piece for piece in G.nodes[nodeIndex]["pieces"] if (goal[0] in piece) or (goal[1] in piece)]

      #percorrendo todas peças que podem ser jogadas
      for i in availablePieces:

        #reestabelecendo variaveis
        tempHand = [*G.nodes[nodeIndex]["hand"]]
        tempPieces = [*G.nodes[nodeIndex]["pieces"]]
        tempTable = [*G.nodes[nodeIndex]["mesa"]]
        tempValor = G.nodes[nodeIndex]["valor"]
        nextTurn = not G.nodes[nodeIndex]['myTurn']
        tempSide = 0


        #simulando como a mão ficaria sem essa peça ( e a mesa com)
        if(G.nodes[nodeIndex]['myTurn'] != 0):
          tempHand.remove(i)
        else:
          tempPieces.remove(i)

        if((i[0] == goal[0]) and (i[1] == goal[1])):
            G.add_nodes_from([
            (newIndex, {"peça": i,
                        "valor": tempValor + i[0] + i[1],
                        "mesa": [[i[1],i[0]]] + tempTable,
                        "hand": [*tempHand],
                        "pieces": [*tempPieces],
                        "myTurn": nextTurn,
                        "side": "start"})])

            open.append(newIndex)
            G.add_edge(nodeIndex, newIndex)
            newIndex += 1

            G.add_nodes_from([
            (newIndex, {"peça": i,
                        "valor": tempValor +i[0] + i[1],
                        "mesa": tempTable + [[i[1],i[0]]],
                        "hand": [*tempHand],
                        "pieces": [*tempPieces],
                        "myTurn": nextTurn,
                        "side": "end"})])

            open.append(newIndex)
            G.add_edge(nodeIndex, newIndex)
            newIndex += 1


        elif((i[1] == goal[0]) and (i[0] == goal[1])):
            G.add_nodes_from([
            (newIndex, {"peça": i,
                        "valor": tempValor +i[0] + i[1],
                        "mesa": [i] + tempTable,
                        "hand": [*tempHand],
                        "pieces": [*tempPieces],
                        "myTurn": nextTurn,
                        "side": "start"})])

            open.append(newIndex)
            G.add_edge(nodeIndex, newIndex)
            newIndex += 1

            G.add_nodes_from([
            (newIndex, {"peça": i,
                        "valor": tempValor +i[0] +i[1],
                        "mesa":  tempTable + [i],
                        "hand": [*tempHand],
                        "pieces": [*tempPieces],
                        "myTurn": nextTurn,
                        "side": "end"})])

            open.append(newIndex)
            G.add_edge(nodeIndex, newIndex)
            newIndex += 1

        else:
          if(i[0] == goal[0]):
            tempTable.insert(0,[i[1],i[0]])
            tempSide = "start"

            tempValor = tempValor + i[0] + i[1]

          elif(i[0] == goal[1]):
            tempTable.append(i)
            tempSide = "end"

            tempValor = tempValor + i[0] + i[1]


          elif(i[1] == goal[0]):
            tempTable.insert(0,i)
            tempSide = "start"
            tempValor = tempValor + i[0] + i[1]


          elif(i[1] == goal[1]):
            tempTable.append([i[1],i[0]])
            tempSide = "end"
            tempValor = tempValor + i[0] + i[1]

          #criando novo nó que representa jogar uma peça

          G.add_nodes_from([
          (newIndex, {"peça": i,
                      "valor": tempValor,
                      "mesa": [*tempTable],
                      "hand": [*tempHand],
                      "pieces": [*tempPieces],
                      "myTurn": nextTurn,
                      "side": tempSide})])
          open.append(newIndex)

          G.add_edge(nodeIndex, newIndex)

          newIndex += 1


  x = max([x for x in G.nodes(data = "valor") if G.out_degree(x[0])==0], key = lambda x: x[-1])[0]


  while(list(G.predecessors(x))[0] != 0):

    x = list(G.predecessors(x))[0]


  return {"piece": G.nodes[x]['peça'],"side": G.nodes[x]["side"]}

@app.route('/', methods=["POST"])
def hello_world():
  input_json = request.get_json(force=True)
  #print(input_json["player"])

  #result = aStar(input_json["player"])
  #result = aStar([[1,2],[2,2],[2,3]],[[2,20]], [[4,4],[4,5],[20,1]])
  result = aStar(input_json["player"], input_json["table"], input_json["pieces"])

  print(result)
  return jsonify(result)
