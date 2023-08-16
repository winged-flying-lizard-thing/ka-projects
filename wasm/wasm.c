#include <stdint.h>
#include <stddef.h>

#ifdef __cplusplus
#define extern extern "C"
#endif

// simple doubly-linked list implementation
struct dl_Node {
  double value;
  struct dl_Node *prev;
  struct dl_Node *next;
};
struct dl_List {
  struct dl_Node *head;
  struct dl_Node *tail;
};

// get sum of all elements in doubly-linked list
extern double listSum(struct dl_List list) {
  double sum = 0;

  for (struct dl_Node *currentNode = list.head; currentNode != NULL;
      currentNode = currentNode->next) {
    sum += currentNode->value;
  }

  return sum;
}
