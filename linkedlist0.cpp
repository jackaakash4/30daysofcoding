//linked list
#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
        int data;
        Node* next;
};

void push(Node** head_ref, int new_data){
    Node* new_node = new Node();

    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}

void insertAfter(Node* prev_node, int new_data){
    if(prev_node != NULL){
        cout << "Previous node cannot be NULL";
        return;
    }

    Node* new_node = new Node();
    new_node -> data = new_data;
    new_node ->next = prev_node-> next;
    prev_node -> next = new_node;
}

void printList(Node* node){
    while(node != NULL){
        cout << " " << node-> data;
        node= node->next;
    }
}

int main(){
    Node* head = NULL;
    push(&head, 1);
    push(&head, 2);
    push(&head, 3);
    insertAfter(head->next, 4);

    printList(head);
    return 0;
}